export const wompiConfig = {
  publicKey: process.env.WOMPI_PUBLIC_KEY,
  privateKey: process.env.WOMPI_PRIVATE_KEY,
  integritySecret: process.env.WOMPI_INTEGRITY_SECRET,
  eventsSecret: process.env.WOMPI_EVENTS_SECRET,

  apiUrl:
    process.env.WOMPI_ENVIRONMENT === "production"
      ? "https://production.wompi.co/v1"
      : "https://sandbox.wompi.co/v1",
};