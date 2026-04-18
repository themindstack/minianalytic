import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env.TRACKER_API_URL": JSON.stringify(process.env.TRACKER_API_URL),
  },
  plugins: [react()],
});
