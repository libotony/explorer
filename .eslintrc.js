module.exports = {
    extends: [
        '@nuxtjs/eslint-config-typescript'
    ],
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'no-console': 'off'
    }
}
