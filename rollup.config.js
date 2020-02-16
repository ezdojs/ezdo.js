import { terser } from 'rollup-plugin-terser'

export default {
    input: 'src/index.js',
    output: {
        file: 'ez/ezdo.esm.js',
        format: 'esm'
    },
    plugins: [ terser() ]
}