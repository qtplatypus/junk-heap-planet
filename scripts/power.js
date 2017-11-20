define("power", [], function () {
	function Power (gridNumber) {
		var charge = 0;
		var source = {};
		var sink   = {};
            
		return  {
			"produce" : function (amount, sourceName) {
			    charge += amount;
			    source[sourceName][0] += amount;
		    }
			,"consume" : function (amount, sinkName) {
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
    }
});

	
