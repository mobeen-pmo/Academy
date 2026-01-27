/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#02A3FD',
                secondary: '#0E3558',
                accent: '#D4AF37',
                'primary-light': '#4FC3F7',
                'secondary-light': '#1A4A7A',
            },
            fontFamily: {
                amiri: ['Amiri', 'serif'],
                inter: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'islamic-pattern': "url('/pattern.svg')",
            },
        },
    },
    plugins: [],
}
