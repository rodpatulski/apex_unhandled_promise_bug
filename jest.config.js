// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
	verbose: true,
	displayName: {
		name: 'RODSTEST',
		color: 'blue',
	},
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		html: "<p id=\"root\"></p>"
    }
};

module.exports = config;