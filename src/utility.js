(() => {
	"use strict";

	let API = {
		normalizePort: function(port) {
			let parsedPort = parseInt(port);
			
			if (!parsedPort) {
				return port;
			}

			if (parsedPort < 0) {
				return false;
			}

			return parsedPort;
		}
	};

	module.exports = API;
})();
