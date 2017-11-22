define("worldGrid", [], function () {
    return function () {
        var grid = [];
        
        function populateGrid (x,y) {
            for (var xd = 0; xd <= x; xd++) {
                for (var yd = 0; yd <= y; yd++) {
                    // check if populaded
                    // add defualt items to storage cells
                    // check that power grid is set up.
                }
            }
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
                
                if (powerGrid.len == 0) {
                   // check if power producer
                }
                else if (powerGrid.len >= 1) {
                    // deal with bridging
                }
                else {
                    // set to correct network
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
