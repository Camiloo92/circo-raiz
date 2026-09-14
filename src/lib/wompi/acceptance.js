import { wompiConfig } from "./config";

export async function getAcceptanceTokens() {
  const response = await fetch(
    `${wompiConfig.apiUrl}/merchants/${wompiConfig.publicKey}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `No fue posible obtener la información de aceptación de Wompi.`
    );
  }

  const data = await response.json();

  return {
    acceptanceToken:
      data.data?.presigned_acceptance?.acceptance_token ?? null,

    personalAuth:
      data.data?.presigned_personal_data_auth?.acceptance_token ?? null,
  };
}