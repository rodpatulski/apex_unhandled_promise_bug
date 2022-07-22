// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
	verbose: true,
	displayName: {
		name: 'RODSTEST',
		color: 'blue',
	},
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {}
};

module.exports = config;