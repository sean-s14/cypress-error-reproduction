import { defineConfig } from "cypress";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    env: {
      BASE_URL: process.env.BASE_URL,
      VITE_VAR: process.env.VITE_VAR,
      VITE_AUTH0_DOMAIN: process.env.VITE_AUTH0_DOMAIN,
      VITE_AUTH0_CLIENT_ID: process.env.VITE_AUTH0_CLIENT_ID,
      AUTH0_EMAIL: process.env.AUTH0_EMAIL,
      AUTH0_PASSWORD: process.env.AUTH0_PASSWORD,
    },
  },
});
