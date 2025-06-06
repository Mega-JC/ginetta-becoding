import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/routes/*.ts', 'src/plugins/*.ts'],
  format: ['cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: process.env.NODE_ENV === 'production',
}); 