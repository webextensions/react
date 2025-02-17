// Note:
//     To list install peerDependencies:
//         $ npm info "eslint-config-ironplate" peerDependencies
//     To install peerDependencies:
//         $ npx install-peerdeps --dev eslint-config-ironplate
// Reference:
//     https://github.com/webextensions/eslint-config-ironplate/blob/master/index.js

const eslintConfigIronPlateReact = require('eslint-config-ironplate/react.js');

module.exports = [
    ...eslintConfigIronPlateReact,

    {
        files: [
            '**/*.cjs',
            '**/*.js',
            '**/*.jsx',
            '**/*.mjs',
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
