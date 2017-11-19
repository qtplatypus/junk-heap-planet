function displayNumber (value) {
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

    

    //$('#table_id').DataTable({
    // ordering : false,
    // paging :false,
    //  scrollX : true,
    //  scrollY : true,
    //  searching : false,
    // });
    var charge = 0;
    
    window.setInterval(function () {
	charge += 2 ** 16;
    }, 1e3);
    
    window.setInterval(function () {
	charge = charge / 2;
    }, 1e3);
    
    // ADD DISPLAY LOGIC
    window.setInterval(function () {
	$("#charge")[0].textContent = displayNumber(charge);
    }, 1e3);
    
    console.log("Done");
} );
