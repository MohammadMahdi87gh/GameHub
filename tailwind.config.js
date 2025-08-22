module.exports = {
    content: ["./*.{html,js}"],
    theme: { extend: {} },
    variants: {
        extend: {

        }
    },
    plugins: [
        function({ addVariant }) {
            addVariant('x-cloak', '[x-cloak]')
        }
    ],
}