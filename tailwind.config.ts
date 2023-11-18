import type { Config } from "tailwindcss";

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
        },
    },
    plugins: [],
};
export default config;
