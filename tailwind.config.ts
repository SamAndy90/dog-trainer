import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainYellow: {
          500: "#FFC700",
          600: "#EAB700",
          700: "#D4A500",
        },
        mainBrown: {
          900: "#170F00",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        caveat: ["var(--font-caveat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
