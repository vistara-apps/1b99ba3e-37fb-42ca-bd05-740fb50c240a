import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design system color tokens
        primary: "hsl(210, 70%, 55%)",
        accent: "hsl(160, 70%, 50%)",
        bg: "hsl(210, 35%, 10%)",
        surface: "hsl(210, 35%, 15%)",
        textPrimary: "hsl(0, 0%, 95%)",
        textSecondary: "hsl(0, 0%, 70%)",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "20px",
        xl: "32px",
      },
      boxShadow: {
        card: "0 8px 24px hsla(0, 0%, 0%, 0.12)",
        modal: "0 20px 40px hsla(0, 0%, 0%, 0.2)",
      },
      fontSize: {
        display: ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em", fontWeight: "700" }],
        heading: ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.75rem" }],
        caption: ["0.875rem", { lineHeight: "1.25rem" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
