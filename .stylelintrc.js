module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-prettier',
        'stylelint-config-html/vue',
        'stylelint-config-recommended-vue/scss',
        'stylelint-config-recommended-less',
        'stylelint-config-recommended-scss',
    ],
    // customSyntax: 'postcss-html',
    plugins: ['stylelint-order'],
    overrides: [
        {
            // files: ['**/*.{scss,css,sass}'],
            // customSyntax: 'postcss-scss',
            files: ['src/**/*.vue'],
            customSyntax: 'postcss-html'
        },
    ],
    ignoreFiles: ['**/*.js','**/*.jsx','**/*.ts','**/*.tsx','**/*.json'],
    rules: {
        indentation: [2, {
            'baseIndentLevel': 1,
        }],
        'declaration-block-semicolon-newline-after': 'always',
        'selector-class-pattern': ['.*'],
        'alpha-value-notation': 'number',
        'color-function-notation': 'legacy',
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep'],
            },

        ],
        'number-leading-zero': 'never',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'selector-type-no-unknown': null,
        'at-rule-no-unknown': null,
        'no-duplicate-selectors': null,
        'no-empty-source': null,
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'deep'] }],
    },
}
