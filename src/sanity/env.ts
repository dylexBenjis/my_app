export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-09-30";

export const dataset = assertValue(
  "production",
  "Missing environment variable: SANITY_STUDIO_DATASET or NEXT_PUBLIC_SANITY_STUDIO_DATASET"
);

export const projectId = assertValue(
  "0ntidcrl" ,
  "Missing environment variable: SANITY_STUDIO_PROJECT_ID or NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
