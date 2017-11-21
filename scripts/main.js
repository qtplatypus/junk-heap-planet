
$(document).ready( function () {
    
/* 
  Check if you have logged in.
  If you haven't been a part of this,
  
     Init the power grid.
     Init the thunker counter
     Create the grid
     Create the first thinker
     Create the two solar arrays
     Create the manufactory
*/

    define(["./power", "./thunkCounter", "./worldGrid"], function(Power, Thunkcounter, WorldGrid) {
	var powerGrid     = Power(0);
	var thunckCounter = Thunkcounter();
	var worldGrid     = WorldGrid();
    
	console.log("Done");
	
    });

});
