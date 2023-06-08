/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./src/index.js",
        "./src/js/*.js",
        "./src/layouts/**/*.html",
        "./src/modules/*.module/*.{html,js}",
        "./src/partials/**/*.html",
        "./src/templates/**/*.html",
    ],
    theme: {
        extend: {
            colors: {
                una: {},
            },
        },
        container: {
            center: true,
            screens: {
                "2xl": "1260px",
            },
        },
    },
    plugins: [],
};
