// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // SSR hardening: force these runtime packages to be inlined into the server
  // bundle instead of left externalized, so the server entry never relies on
  // runtime module resolution. NOTE: only `noExternal` is set here — never set
  // `ssr.external`, which breaks the Worker SSR build.
  vite: {
    ssr: {
      noExternal: ["tslib", "react-remove-scroll", "lucide-react", /@radix-ui\/.*/],
    },
  },
});
