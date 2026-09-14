import crypto from "crypto";
import { kits } from "@/data/kits";
import { generateIntegritySignature } from "@/lib/wompi/signature";
import { getAcceptanceTokens } from "@/lib/wompi/acceptance";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      type = "donation",
      kitId,
      amountInCents,
      currency = "COP",
    } = body;

    let finalAmountInCents;

    // ==============================
    // KITS
    // ==============================
    if (type === "kit") {
      if (!kitId) {
        return Response.json(
          { error: "El kit es obligatorio." },
          { status: 400 }
        );
      }

      const kit = kits.find((item) => item.id === kitId);

      if (!kit) {
        return Response.json(
          { error: "El kit seleccionado no existe." },
          { status: 404 }
        );
      }

      // El precio oficial sale del servidor
      finalAmountInCents = kit.price * 100;
    }

    // ==============================
    // DONACIÓN
    // ==============================
    if (type === "donation") {
      if (
        !Number.isInteger(amountInCents) ||
        amountInCents <= 0
      ) {
        return Response.json(
          { error: "El monto de la donación no es válido." },
          { status: 400 }
        );
      }

      finalAmountInCents = amountInCents;
    }

    // Tipo de operación no permitido
    if (type !== "kit" && type !== "donation") {
      return Response.json(
        { error: "El tipo de operación no es válido." },
        { status: 400 }
      );
    }

    const reference = `CR-${crypto.randomUUID()}`;

    const signature = generateIntegritySignature({
      reference,
      amountInCents: finalAmountInCents,
      currency,
    });

    const acceptanceTokens = await getAcceptanceTokens();

    return Response.json({
      reference,
      amountInCents: finalAmountInCents,
      currency,
      signature,
      acceptance: acceptanceTokens,

      // Útil para identificar qué operación estamos preparando
      type,
      ...(type === "kit" && { kitId }),
    });
  } catch (error) {
    console.error("Error creando checkout Wompi:", error);

    return Response.json(
      { error: "No fue posible preparar el checkout." },
      { status: 500 }
    );
  }
}