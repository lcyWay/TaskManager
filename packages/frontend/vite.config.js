import path from "path";
import react from "@vitejs/plugin-react-swc";
import svgrPlugin from "vite-plugin-svgr";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const minify = process.env.NODE_ENV === "production";
const rootPath = process.cwd();

const mode = minify ? "production" : "development";

export default defineConfig({
  mode,
  define: { global: "window", "process.env": loadEnv(mode, rootPath, "") },
  plugins: [
    react({ tsDecorators: true }),
    tsconfigPaths(),
    svgrPlugin({ svgrOptions: { ref: true } }),
    vanillaExtractPlugin({ identifiers: minify ? "short" : "debug" }),
  ],
  server: { port: "3000" },
  build: {
    outDir: path.join(rootPath, "build"),
    minify,
    sourcemap: !minify,
  },
});
