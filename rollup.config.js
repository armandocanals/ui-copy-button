import babel      from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: 'src/component/CopyButton.js',
    output: {
      file: 'dist/CopyButton.js',
      format: 'esm',
      globals: {
        'react': 'React'
      }
    },
    external: ['react'],
    plugins: [
      babel(),
      terser({ keep_fnames: true })
    ]
  }
];
