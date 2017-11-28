define("solarArray", [], function () {
   return function () {
      
      var solarArray = {};
      
      window.setInterval(function () {
         if (solarArray.powerGrid == undefined) {
            return;
         }
         
         var power = (1 << 15) / length (solarArray.powerGrid);
         
         solarArray.powerGrid.foreach(function (grid) {
            grid.produce(power, "solarArray");
         }
	    }, 1e3);
    }
}
