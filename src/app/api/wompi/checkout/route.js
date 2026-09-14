import crypto from "crypto";
import { generateIntegritySignature } from "@/lib/wompi/signature";
import { getAcceptanceTokens } from "@/lib/wompi/acceptance";

export async function POST(request) {
  try {
    const body = await request.json();

    const { amountInCents, currency = "COP" } = body;

    if (!Number.isInteger(amountInCents) || amountInCents <= 0) {
      return Response.json(
        { error: "El monto no es válido." },
        { status: 400 }
      );
    }

    const reference = `CR-${crypto.randomUUID()}`;

    const signature = generateIntegritySignature({
      reference,
      amountInCents,
      currency,
    });

    const acceptanceTokens = await getAcceptanceTokens();

    return Response.json({
      reference,
      amountInCents,
      currency,
      signature,
      acceptance: acceptanceTokens,
    });
  } catch (error) {
    console.error("Error creando checkout Wompi:", error);

    return Response.json(
      {
        error: "No fue posible preparar el checkout.",
      },
      { status: 500 }
    );
  }
}