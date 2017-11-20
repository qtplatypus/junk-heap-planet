"use strict";
// This has so much in common with power.  See if you can refactor them together

define("thunkCounter", ["./displayNumber"], function (displayNumber) {

    return function () {
	var thunkCounter = 0;
	var source       = {};
	var sink         = {};

	var thunk = {
	    "thunks" : function () {
		return thunkCounter;
	    }
	    ,"produce" : function (amount, sourceName) {
		thunkCounter += amount;
		if (typeof source[sourceName] === 'undefined') {
		    source[sourceName] = [];
		}
		source[sourceName][0] += amount;
	    }
	    ,"consume" : function (amount, sinkName) {
		if (typeof sink[sinkName] === 'undefined') {
		    sink[sinkName] = [];
		}

		if (charge >= amount) {
          	    charge -= amount;
		    sink[sinkName][0] += amount;
		    return amount;
		}
		else {
		    var diff = amount - charge;
		    charge = 0;
		    sink[sinkName][0] += diff;
		    return diff;
		}
	    }
	    ,"check" : function (amount) {
		return (charge >= amount);
	    }
	};

	window.setInterval(function () {
	    $("#thunks")[0].textContent = displayNumber(thunkCounter);
	}, 1e3);
        
	return thunk;
    }		
});
