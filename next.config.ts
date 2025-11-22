import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "date-fns/locale": require.resolve("date-fns/locale"),
    };

    return config;
  },
};

export default nextConfig;
