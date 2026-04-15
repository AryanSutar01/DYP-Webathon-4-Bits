import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed": "#2f1314",
        "tertiary": "#452526",
        "primary-fixed": "#c8ebd0",
        "outline": "#727972",
        "surface-container-high": "#eae8e0",
        "inverse-surface": "#30312c",
        "secondary-fixed": "#ffe088",
        "outline-variant": "#c2c8c0",
        "surface-container": "#f0eee6",
        "on-background": "#1b1c17",
        "surface-variant": "#e4e3db",
        "error-container": "#ffdad6",
        "on-tertiary-fixed-variant": "#613d3e",
        "tertiary-fixed-dim": "#ecbaba",
        "surface-dim": "#dcdad2",
        "secondary-container": "#fed65b",
        "on-secondary-fixed": "#241a00",
        "primary-fixed-dim": "#adcfb4",
        "on-error-container": "#93000a",
        "on-tertiary": "#ffffff",
        "surface-container-highest": "#e4e3db",
        "on-secondary-container": "#745c00",
        "surface-container-low": "#f5f4ec",
        "error": "#ba1a1a",
        "tertiary-fixed": "#ffdad9",
        "background": "#fbf9f1",
        "on-error": "#ffffff",
        "on-surface": "#1b1c17",
        "primary": "#163422",
        "primary-container": "#2d4b37",
        "on-primary": "#ffffff",
        "on-surface-variant": "#424843",
        "secondary": "#735c00",
        "surface-container-lowest": "#ffffff",
        "surface-tint": "#466550",
        "surface": "#fbf9f1",
        "tertiary-container": "#5e3b3c",
        "on-tertiary-container": "#d6a6a6",
        "inverse-primary": "#adcfb4",
        "on-primary-container": "#99baa1",
        "surface-bright": "#fbf9f1",
        "on-primary-fixed": "#022110",
        "on-primary-fixed-variant": "#2f4d39",
        "on-secondary": "#ffffff",
        "inverse-on-surface": "#f3f1e9",
        "secondary-fixed-dim": "#e9c349",
        "on-secondary-fixed-variant": "#574500"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Noto Serif"],
        "body": ["Manrope"],
        "label": ["Manrope"]
      }
    }
  },
  plugins: [],
};

export default config;