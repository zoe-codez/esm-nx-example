/* eslint-disable */
export default {
  displayName: "data-processing",
  preset: "../../jest.preset.js",
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
    "^.+\\.mts$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  transformIgnorePatterns: [
    `node_modules/(?!chalk)`,
  ],
  moduleFileExtensions: ["mts", "ts", "js", "html"],
  coverageDirectory: "../../coverage/libs/data-processing",
};
