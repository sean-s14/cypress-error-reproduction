import { defineConfig } from "cypress";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      BASE_URL: process.env.BASE_URL,
      VITE_VAR: process.env.VITE_VAR,
    },
  },
});
