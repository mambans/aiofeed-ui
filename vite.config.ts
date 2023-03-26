import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";
import * as path from "path";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import typescript from "@rollup/plugin-typescript";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslint()],
	resolve: {
		// alias: { "@": path.resolve(__dirname, "./src/") },
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
	},
	define: {
		global: {},
	},
	build: {
		manifest: true,
		minify: true,
		reportCompressedSize: true,
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			fileName: "index",
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			plugins: [
				typescriptPaths({
					preserveExtensions: true,
				}),
				typescript({
					sourceMap: false,
					declaration: true,
					outDir: "dist",
				}),
			],
			output: {
				globals: {
					react: "React",
				},
			},
		},
	},
});
