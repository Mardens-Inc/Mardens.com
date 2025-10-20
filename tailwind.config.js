import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        fontFamily: {
            sans: ['dunbar-text', 'sans-serif'],
            headers: ['dunbar-tall', 'sans-serif'],
            accent: ['eds-market-narrow-slant', 'cursive'],
        },
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            fontFamily: 'dunbar-tall, sans-serif',
                            fontWeight: '900',
                        },
                        h2: {
                            fontFamily: 'dunbar-tall, sans-serif',
                            fontWeight: '900',
                        },
                        h3: {
                            fontFamily: 'dunbar-tall, sans-serif',
                            fontWeight: '900',
                        },
                        h4: {
                            fontFamily: 'dunbar-tall, sans-serif',
                            fontWeight: '900',
                        },
                        p: {
                            fontFamily: 'dunbar-text, sans-serif',
                        },
                    },
                },
            },
        },
    },
    darkMode: "class",
    plugins: [heroui({
        themes: {
            light: {
                colors: {
                    primary: {
                        DEFAULT: "#ec2b37",
                        foreground: "#fff",
                    },
                    secondary: "#fed00d",
                    background: "#fff",

                }
            },
        }
    })]
}