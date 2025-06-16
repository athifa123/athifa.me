// Simple defaults - replace with your actual values
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "lh7rx9r9";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const token = process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN || "";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-07-21";

// Optional
export const hookSecret = process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET;
export const giscusRepoId = process.env.NEXT_PUBLIC_GISCUS_REPOID;
export const giscusCategoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORYID;
export const useCdn = false;
export const mode = process.env.NODE_ENV;