// jest.config.ts
import nextJest from 'next/jest'

// Next.js の設定を反映させる
const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // エイリアス対応（必要に応じて）
  },
}

export default createJestConfig(customJestConfig)
