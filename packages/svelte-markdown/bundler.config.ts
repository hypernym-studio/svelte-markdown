import { defineConfig, externals, resolvePaths } from '@hypernym/bundler'
import { dependencies } from './package.json'

export default defineConfig({
  entries: [
    // Shared
    {
      input: './src/shared/index.ts',
      output: './dist/shared/index.mjs',
    },
    // Utils
    {
      input: './src/utils/index.ts',
      output: './dist/utils/index.mjs',
    },
    {
      dts: './src/utils/types.ts',
      output: './dist/utils/index.d.mts',
    },
    // Main
    {
      input: './src/index.ts',
      externals: [
        ...externals,
        ...Object.keys(dependencies),
        /^svelte/,
        '@/shared',
        '@/utils',
      ],
      paths: resolvePaths([
        { find: '@/shared', replacement: './shared/index.mjs' },
        { find: '@/utils', replacement: './utils/index.mjs' },
      ]),
    },
    {
      dts: './src/types/index.ts',
      output: './dist/index.d.mts',
      externals: [
        ...externals,
        ...Object.keys(dependencies),
        '@/plugins/types',
      ],
      paths: resolvePaths([
        { find: '@/plugins/types', replacement: './plugins/index.d.mts' },
      ]),
    },
    // Plugins
    {
      input: './src/plugins/public/index.ts',
      output: './dist/plugins/index.mjs',
    },
    {
      dts: './src/plugins/public/types.ts',
      output: './dist/plugins/index.d.mts',
    },
  ],
})
