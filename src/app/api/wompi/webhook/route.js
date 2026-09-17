import crypto from "crypto";

function getNestedValue(object, path) {
  return path.split(".").reduce((current, key) => {
    return current?.[key];
  }, object);
}

function generateEventChecksum(event) {
  const properties = event.signature?.properties ?? [];
  const timestamp = event.timestamp;
  const secret = process.env.WOMPI_EVENTS_SECRET;

  if (!secret) {
    throw new Error("WOMPI_EVENTS_SECRET no está configurado.");
  }

  const values = properties.map((property) => {
    const value = getNestedValue(event.data, property);

    if (value === undefined || value === null) {
      throw new Error(
        `No se encontró la propiedad del evento: ${property}`
      );
    }

    return String(value);
  });

  const signatureString =
    values.join("") + String(timestamp) + secret;

  return crypto
    .createHash("sha256")
    .update(signatureString)
    .digest("hex");
}

export async function POST(request) {
  try {
    const event = await request.json();

    if (event.event !== "transaction.updated") {
      return Response.json({
        received: true,
        ignored: true,
      });
    }

    const expectedChecksum = generateEventChecksum(event);

    const receivedChecksum =
      request.headers.get("X-Event-Checksum") ??
      event.signature?.checksum;

    if (!receivedChecksum) {
      return Response.json(
        {
          error: "El evento no contiene checksum.",
        },
        { status: 400 }
      );
    }

    const isValid = crypto.timingSafeEqual(
      Buffer.from(expectedChecksum, "utf8"),
      Buffer.from(receivedChecksum, "utf8")
    );

    if (!isValid) {
      console.error("Checksum de Wompi inválido.");

      return Response.json(
        {
          error: "Checksum inválido.",
        },
        { status: 401 }
      );
    }

    const transaction = event.data?.transaction;

    console.log("Evento Wompi validado:", {
      id: transaction?.id,
      status: transaction?.status,
      reference: transaction?.reference,
      amountInCents: transaction.amount_in_cents,
      currency: transaction?.currency,
    });

    return Response.json({
      received: true,
      valid: true,
    });
  } catch (error) {
    console.error("Error procesando webhook de Wompi:", error);

    return Response.json(
      {
        error: "No fue posible procesar el evento.",
      },
      { status: 500 }
    );
  }
}