import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import postcss from "rollup-plugin-postcss";

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs',  sourcemap: true },
        { file: pkg.module, format: 'esm',  sourcemap: true }
    ],
    plugins: [
        external(),
        babel({
            exclude: 'node_modules/**'
        }),
        postcss(),
        del({ targets: ['dist/*'] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};