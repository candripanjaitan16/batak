import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Perhatikan kurung kurawal { mode } di bawah ini, itu kuncinya!
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: "/batak/",
  };
});
