/* eslint-disable filenames/match-exported */

import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import cssnano from 'cssnano';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.js', '.jsx'];

const configGenerator = function ({
    input,
    output
}) {
    const dir = output.dir;

    return {
        input,
        output: {
            dir,
            format: 'es',
            preserveModules: true,
            sourcemap: true
        },
        plugins: [
            nodeResolve({ extensions }),
            babel({
                extensions,

                // babelHelpers: 'bundled',
                babelHelpers: 'runtime',

                exclude: 'node_modules/**',

                presets: [
                    '@babel/preset-react',
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                chrome: '92',
                                firefox: '91',
                                safari: '14'
                            }
                        }
                    ]
                ],
                plugins: [
                    '@babel/plugin-transform-runtime' // Required if we wish to use configuration `babelHelpers: 'runtime'`
                ]
            }),
            commonjs(),
            postcss({
                plugins: [
                    cssnano({
                        preset: [
                            'default',
                            {
                                // https://cssnano.co/docs/optimisations/normalizewhitespace/
                                normalizeWhitespace: false
                            }
                        ]
                    })
                ],
                extract: true,
                sourceMap: true
            })
        ],

        // Alternatively, try a library like https://www.npmjs.com/package/rollup-plugin-peer-deps-external
        external: [
            '@mui/base',
            '@mui/icons-material',
            '@mui/material',
            'prop-types',
            'react',
            'react-dom',
            'react-scroll-into-view-if-needed',
            'react-use'
        ]

        // // https://github.com/TanStack/query/issues/5175#issuecomment-1482196558
        // onwarn(warning, warn) {
        //     if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        //         return;
        //     }
        //     warn(warning);
        // }
    };
};

const rollupConfig = [
    configGenerator({
        input:     'src/components/ClickToShow/ClickToShow.js',
        output: { dir: 'components/ClickToShow/' }
    }),
    configGenerator({
        input:     'src/components/CopyIcon/CopyIcon.js',
        output: { dir: 'components/CopyIcon/' }
    }),
    configGenerator({
        input:     'src/components/Loading/Loading.js',
        output: { dir: 'components/Loading/' }
    }),
    configGenerator({
        input:     'src/hooks/useAjax/useAjax.js',
        output: { dir: 'hooks/useAjax/' }
    }),
    configGenerator({
        input:     'src/hooks/useLocalStorage/useLocalStorage.js',
        output: { dir: 'hooks/useLocalStorage/' }
    })
];

// eslint-disable-next-line import/no-default-export
export default rollupConfig;
