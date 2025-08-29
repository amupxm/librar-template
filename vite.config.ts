import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ command, mode }) => {
  // For library build
  if (process.env.BUILD_MODE === 'lib') {
    return {
      plugins: [
        react({
          jsxRuntime: 'automatic'
        }),
        dts({
          tsconfigPath: './tsconfig.lib.json',
          rollupTypes: true,
          insertTypesEntry: true,
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'MyComponentLibrary',
          formats: ['es', 'umd'],
          fileName: (format) => `my-component-library.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
        sourcemap: true,
        emptyOutDir: true,
      },
    }
  }

  // For development server
  return {
    plugins: [react()],
    root: './src/demo',
    publicDir: '../../public',
    build: {
      outDir: '../../dist-demo',
    },
  }
})
