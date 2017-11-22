define("worldGrid", [], function () {
    return function () {
        var grid = [];
        
        function populate (x,y) {
        }
        
        var gridObject = {
            "placeBuilding" : function (x, y, object) {
                if (x % 2 == 0 ? !y % 2 == 0 : y % 2 == 0 ) {
                    return FALSE;
                }
                
                if (!this.check(x, y)) {
                    return FALSE;
                }
                
                if (grid.len < x) {
                    populateGrid(x, y);
                }
                
                if (grid[x].len < y) {
                    populateGrid(x, y);
                }
                
                var powerGrid = powered(x, y);
                
                if (typeof(powerGrid) === nil) {
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
        
        return gridObject;
    }
    // Add object
    // Ask if object is there
    // Display object
    
});
