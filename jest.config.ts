import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  watch: false,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
