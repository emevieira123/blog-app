import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest", // Usa babel-jest para transformar TypeScript/JSX
  },
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  watch: false,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
