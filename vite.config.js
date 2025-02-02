import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// added 'server: port 3000' instead of default port 5173 for futureproofing.
export default defineConfig({
  base: "/v43-tier2-team-24/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
