define("worldGrid", [], function () {
    return function () {
        var grid = [];
        
        var gridObject = {
            "placeBuilding" : function (x, y, object) {
                if (x % 2 == 0 ? !y % 2 == 0 : y % 2 == 0 ) {
                    return FALSE;
                }
            }
            ,"addSolid" : function (x,y, solids) {}
            ,"addLiquid" : function (x,y, liquid) {}
            ,"addGas" : function (x,y, gases) {}
            ,"consumeSolid" : function (x, y, solids) {}
            ,"flowLiquid" : function (x, y, pressure) {}
            ,"flowGas" : function (x, y, pressure) {}
            
            ,"check" : function (x, y) {}
        }
    }
    // Add object
    // Ask if object is there
    // Display object
    
    return gridObject;
});
