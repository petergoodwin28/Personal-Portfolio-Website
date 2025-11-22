import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   webpack(config) {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "date-fns/locale": require.resolve("date-fns/locale"),
//     };

//     return config;
//   },
// };
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        css: false,
      },
    },
  },
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;

module.exports = nextConfig;

export default nextConfig;
