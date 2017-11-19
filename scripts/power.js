define("power", [], function () {
    var power_grid = {
	    "charge" : 0
	    ,"add_power" : function (amount, source) {
		    this.charge += amount;
		    this.source[source][0] += amount;
	    }
	    ,"remove_power" : function (amount, sink) {
		    if (this.charge >= amount) {
          		    this.charge -= amount;
			    this.sink[sink][0] += amount;
			    return amount;
		    }
		    else {
			    var diff = amount - this.charge;
			    this.charge = 0;
			    this.sink[sink][0] += diff;
			    return diff;
		    }
	    }
    }
});

	
