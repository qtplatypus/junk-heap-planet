"use strict";

define("displayNumber", [], function () {

    return function (value) {
	var exponent = Math.log(value)/Math.log(2);
	if (exponent < 10) {
            return Math.floor(value);
	}
	else if (exponent >= 10 && exponent <20) {
            return Math.floor(value/1024) + " Ki";
	}
	else if (exponent >= 20 && exponent <30) {
            return Math.floor(value/1024**2) + " Mi";
	}
	else if (exponent >= 30 && exponent <40) {
            return Math.floor(value/1024**3) + " Gi";
	}
	else { // if (exponent >= 40 && exponent <50) {
            return Math.floor(value/1024**4) + " Ti";
	}
    }
});
