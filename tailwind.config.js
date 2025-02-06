import typhography from '@tailwindcss/typography';
import queries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./{src,lib}/**/*.{html,js,svelte,ts}'],
    darkMode: ['selector', '[data-mode="dark"]'],
    theme: {
        fontFamily: {
            sans: '"JetBrains Mono", serif'
        },
        extend: {

        }
    },
    plugins: [typhography, queries, forms]
};
