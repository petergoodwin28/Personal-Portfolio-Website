/** @type {import("next").NextConfig} */
const nextConfig = {
  // Prevent Next.js from stripping Tailwind CSS in production
  experimental: {
    optimizeCss: false,
  },

  webpack(config: { resolve: { alias: any; }; module: { rules: { test: RegExp; use: (string | { loader: string; options: { importLoaders: number; }; })[]; }[]; }; }) {
    // Keep your alias
    config.resolve.alias = {
      ...config.resolve.alias,
      "date-fns/locale": require.resolve("date-fns/locale"),
    };

    // Ensure SCSS + CSS go through PostCSS → Tailwind
    config.module.rules.push({
      test: /\.(css|scss)$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: { importLoaders: 1 }
        },
        "postcss-loader", // <-- THIS is what runs Tailwind
        "sass-loader",
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
