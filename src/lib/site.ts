const DEFAULT_SITE_URL = "https://mosaicharborventures.com";

const normalizeSiteUrl = (value?: string) => value?.replace(/\/$/, "");

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ?? DEFAULT_SITE_URL;
