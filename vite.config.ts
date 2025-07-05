import orange from "@orange-js/vite";
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import tsconfigPaths from "vite-tsconfig-paths";
import rehypeShiki, { RehypeShikiOptions } from "@shikijs/rehype";
import remarkGfm from "remark-gfm";
import tailwindcss from "@tailwindcss/vite";

const shikiOpts: RehypeShikiOptions = {
  themes: {
    dark: "github-light-default",
    light: "github-light-default",
  },
  addLanguageClass: true,
};

export default defineConfig({
  plugins: [
    orange(),
    mdx({
      providerImportSource: "@mdx-js/react",
      rehypePlugins: [[rehypeShiki, shikiOpts]],
      remarkPlugins: [remarkGfm],
    }),
    tsconfigPaths(),
    tailwindcss(),
  ],
  build: {
    minify: true,
  },
});
