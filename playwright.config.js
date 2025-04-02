import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
    use: {
        baseURL: process.env.BASE_URL, // Use environment variable
        timeout: 30000, // 30 sec timeout
    },
    reporter: [['html', { open: 'never' }]], // HTML report
});
