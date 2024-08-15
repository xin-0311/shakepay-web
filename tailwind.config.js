/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: Array.from({ length: 10 }).map((_, i) => ({ [`${i + 1}`]: i + 1 })),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "service-bg": "url(/assets/service-bg.svg)",
        "partner-bg": "url(/assets/partner.png)",
        "foot-bg": "url(/assets/foot_aware.png)",
      },
      colors: {
        brand_color: "var(--brand_color)",
        brand_color_02: "var(--brand_color_02)",
        brand_color_03: "var(--brand_color_03)",
        text_color_01: "var(--text_color_01)",
        text_color_02: "var(--text_color_02)",
        text_color_03: "var(--text_color_03)",
        bg_color_01: "var(--bg_color_01)",
        bg_color_02: "var(--bg_color_02)",
        bg_color_03: "var(--bg_color_03)",
        bg_color_04: "var(--bg_color_04)",
        bg_color_05: "var(--bg_color_05)",
        bg_color_06: "var(--bg_color_06)",
        shadow_color_01: "var(--shadow_color_01)",
        shadow_color_02: "var(--shadow_color_02)",
        border_color_01: "var(--border_color_01)",
        border_color_02: "var(--border_color_02)",
      }
    },
  },
  plugins: [],
};
