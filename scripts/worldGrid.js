function isContainer (x,y) {
    return ((x % 2) != (y % 2));
}

define("worldGrid", [], function () {
    return function () {
        var grid = [];
        
        function populateGrid (x,y) {
            // check if populated
            for (var xd = 0; xd <= x; xd++) {
                if (grid[xd] === undefined) {
                    grid[xd] = [];
                 }
                
                for (var yd = 0; yd <= y; yd++) {
                    // check if populaded
                    if (grid[xd][yd] === undefined) {
                        if isContainer(xd,yd) {
                            grid[xd][yd] = {} // Populate default items to storage cell
                        }
                        else {
                            grid[xd][yd] = {} // Empty building cell
                        }
                    }
                }
            }
        }
        
        var gridObject = {
            "placeBuilding" : function (x, y, object) {
                 {
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
                   // check if power producer if so and has no network create new network.
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
