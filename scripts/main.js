
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

    define(["./power", "./thunkCounter"], function(Power, Thunkcounter) {
	var primaryGrid   = Power(0);
	var thunckCounter = Thunkcounter();

    //$('#table_id').DataTable({
    // ordering : false,
    // paging :false,
    //  scrollX : true,
    //  scrollY : true,
    //  searching : false,
    // });
    
    /*window.setInterval(function () {
	charge += 2 ** 16;
    }, 1e3);*/
        
    // ADD DISPLAY LOGIC
    
	console.log("Done");
	
    });

});
