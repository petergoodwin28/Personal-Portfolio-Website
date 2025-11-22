import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  // content: [
  //   "./app/**/*.{ts,tsx,js,jsx,mdx}",
  //   "./components/**/*.{ts,tsx,js,jsx,mdx}",
  //   "./components/ui/**/*.{ts,tsx}",
  //   "./pages/**/*.{ts,tsx,js,jsx,mdx}",
  //   "./src/**/*.{ts,tsx,js,jsx,mdx}",
  // ],
  content: [
  "./app/**/*.{ts,tsx,mdx}",
  "./components/**/*.{ts,tsx}",
  "./components/ui/**/*.{ts,tsx}",
  "./pages/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
]

,

  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",

        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",

        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};

export default config;


// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: ["class"],
//   content: [
//     "./app/**/*.{ts,tsx,js,jsx,mdx,scss}",
//     "./components/**/*.{ts,tsx,js,jsx,mdx,scss}",
//     "./components/ui/**/*.{ts,tsx}",
//     "./pages/**/*.{ts,tsx,js,jsx,mdx,scss}",
//     "./src/**/*.{ts,tsx,js,jsx,mdx,scss}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         primary: "hsl(var(--primary))",
//         "primary-foreground": "hsl(var(--primary-foreground))",
//         secondary: "hsl(var(--secondary))",
//         "secondary-foreground": "hsl(var(--secondary-foreground))",
//         destructive: "hsl(var(--destructive))",
//         "destructive-foreground": "hsl(var(--destructive-foreground))",
//         muted: "hsl(var(--muted))",
//         "muted-foreground": "hsl(var(--muted-foreground))",
//         accent: "hsl(var(--accent))",
//         "accent-foreground": "hsl(var(--accent-foreground))",
//         popover: "hsl(var(--popover))",
//         "popover-foreground": "hsl(var(--popover-foreground))",
//         card: "hsl(var(--card))",
//         "card-foreground": "hsl(var(--card-foreground))",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//     },
//   },
//   plugins: [
//     require("tailwindcss-animate"),
//   ],
// };

// export default config;
