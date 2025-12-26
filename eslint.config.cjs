// Note:
//     To list install peerDependencies:
//         $ npm info "eslint-config-ironplate" peerDependencies
//     To install peerDependencies:
//         $ npx install-peerdeps --dev eslint-config-ironplate
// Reference:
//     https://github.com/webextensions/eslint-config-ironplate/blob/master/index.js

const globals = require('globals');

const eslintIronPlateConfigNode = require('eslint-config-ironplate/node.js').default;

module.exports = [
    {
        // https://eslint.org/docs/latest/use/configure/ignore
        //
        // IMPORTANT:
        //     * https://github.com/eslint/eslint/discussions/18304#discussioncomment-9069706
        //     * https://github.com/eslint/eslint/discussions/17429#discussioncomment-6579229
        ignores: [
            // 'node_modules/**' is ignored by default

            'components/**',
            'hooks/**',

            // Ignore extracted output directory of `$ npm pack`. eg: "/owner-package-1.0.0/" extracted from "/owner-package-1.0.0.tgz"
            '*-*.*.*/'
        ]
    },

    ...eslintIronPlateConfigNode,

    {
        languageOptions: {
            globals: {
                ...globals.browser
            }
        }
    },

    {
        files: [
            '**/*.cjs',
            '**/*.cts',
            '**/*.js',
            '**/*.jsx',
            '**/*.mjs',
            '**/*.mts',
            '**/*.ts',
            '**/*.tsx'
        ],

        // Add ESLint plugins here. If they are stable and useful, move those as a pull
        // request to https://github.com/webextensions/eslint-config-ironplate/
        plugins: {
        },

        // Add ESLint rules here. If they are stable and useful, move those as a pull
        // request to https://github.com/webextensions/eslint-config-ironplate/
        rules: {
        }
    }
];
