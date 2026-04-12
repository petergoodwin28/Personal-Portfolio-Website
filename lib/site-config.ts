function resolveSiteUrl() {
  const defaultUrl = "https://petergoodwin.dev";
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawUrl) {
    return defaultUrl;
  }

  try {
    const parsed = new URL(rawUrl);
    return parsed.origin;
  } catch {
    return defaultUrl;
  }
}

export const siteConfig = {
  name: "Peter Goodwin Portfolio",
  shortName: "Peter Goodwin",
  description:
    "Web developer portfolio showcasing modern Next.js projects, frontend architecture, UI systems, and interactive web experiences.",
  url: resolveSiteUrl(),
  ogImagePath: "/opengraph-image",
  links: {
    github: "https://github.com/petergoodwin28",
  },
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}
