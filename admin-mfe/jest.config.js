module.exports = {
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		customExportConditions: ['react-native'],
	},
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
	},

	setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
