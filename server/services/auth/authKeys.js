if (process.env.NODE_ENV === 'production') {
	// * Use default .env variables for production
	module.exports = {
		cookieKey: 'process.env.COOKIE_KEY'
	}
} else {
	// * Use custom data for development
	module.exports = {
		cookieKey: 'bo5m02eauyprbn2m30vm'
	}
}
