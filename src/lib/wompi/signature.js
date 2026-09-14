import crypto from "crypto";

export function generateIntegritySignature({
  reference,
  amountInCents,
  currency = "COP",
}) {
  const secret = process.env.WOMPI_INTEGRITY_SECRET;

  if (!secret) {
    throw new Error("WOMPI_INTEGRITY_SECRET no está configurado.");
  }

  const signatureString =
    `${reference}${amountInCents}${currency}${secret}`;

  return crypto
    .createHash("sha256")
    .update(signatureString)
    .digest("hex");
}