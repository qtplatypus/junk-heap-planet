"use strict";

define("power", ["./displayNumber"], function (displayNumber) {

    return function (gridNumber) {
	var charge = 0;
	var source = {};
	var sink   = {};
	var grid   = {
	    "charge"  : function () {
		return charge;
	    }
	    ,"produce" : function (amount, sourceName) {
		charge += amount;
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
	};

	window.setInterval(function () {
	    grid.consume(charge / 2, "Leakage");
	}, 1e3);

	window.setInterval(function () {
	    $("#charge")[0].textContent = displayNumber(charge);
	}, 1e3);
        
	return grid;
    }
});

	
