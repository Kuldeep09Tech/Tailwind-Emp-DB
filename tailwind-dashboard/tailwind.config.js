/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#1565c0', // Dark Blue Text/Icons
                    secondary: '#b71c1c',
                    accent: '#f9a825',
                },
                ui: {
                    bg: '#f3f4f6',       // <--- CHANGE: Global Background to White (if you want "white behind it")
                    card: '#eff3f6',     // <--- CHANGE: The Exact Light Blue-Grey for Cards
                    textMain: '#222222',
                    textSub: '#555555',
                }
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            }
        },
    },
    plugins: [],
}