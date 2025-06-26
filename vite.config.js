import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    // ✅ Thêm dòng này để fix lỗi global
    define: {
        global: "globalThis",
    },
    // ✅ Đảm bảo các package liên quan được optimize
    optimizeDeps: {
        include: ['sockjs-client', '@stomp/stompjs'],
    },
});
