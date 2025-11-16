// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   webpack(config) {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       'date-fns/locale': require.resolve('date-fns/locale'), // Resolving locale explicitly
//     };
//     return config;
//   },
// };

// export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   webpack(config) {
//     // Keep your alias
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "date-fns/locale": require.resolve("date-fns/locale"),
//     };

//     // ✅ Ensure .scss files are processed correctly
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: [
//         "style-loader",
//         {
//           loader: "css-loader",
//           options: {
//             importLoaders: 1,
//           },
//         },
//         "postcss-loader", // runs Tailwind via @tailwindcss/postcss
//         "sass-loader", // compiles SCSS
//       ],
//     });

//     return config;
//   },
// };

// export default nextConfig;


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
