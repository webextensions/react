// Note:
//     To list install peerDependencies:
//         $ npm info "eslint-config-ironplate" peerDependencies
//     To install peerDependencies:
//         $ npx install-peerdeps --dev eslint-config-ironplate
// Reference:
//     https://github.com/webextensions/eslint-config-ironplate/blob/master/index.js

const globals = require('globals');

const eslintConfigIronPlateReact = require('eslint-config-ironplate/react.js').default;

module.exports = [
    ...eslintConfigIronPlateReact,

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
            /* Begin: Temporarily turning off some rules */
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/no-static-element-interactions': 'off'
            /* End: Temporarily turning off some rules */
        }
    }
];
