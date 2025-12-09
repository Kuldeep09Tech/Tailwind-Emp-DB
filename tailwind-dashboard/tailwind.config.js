/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-blue': '#1565c0',
                'brand-red': '#b71c1c',
                'card-bg': '#eff3f6',
            }
        },
    },
    plugins: [],
}