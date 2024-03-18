import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  coveragePathIgnorePatterns: ['src/index.js'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 88,
      functions: 90,
      lines: 90,
    },
  },
};

export default config;
