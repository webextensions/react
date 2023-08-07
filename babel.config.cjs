/* eslint-env node */

// https://babeljs.io/docs/en/babel-preset-env
const presets = [
    [
        '@babel/preset-env',
        {
            // https://babeljs.io/docs/en/babel-preset-env#targets
            targets: {
                chrome: '92',
                firefox: '91',
                safari: '14'
            }
        }
    ]
];

module.exports = { presets };
