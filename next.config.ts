import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'date-fns/locale': require.resolve('date-fns/locale'), // Resolving locale explicitly
    };
    return config;
  },
};

export default nextConfig;
