/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:



Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Example 2:



Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 

Constraints:

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.
*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    
    if(coordinates.length == 2) return true;
    
    const x1 = coordinates[0][0];
    const y1 = coordinates[0][1];
    
    let x2 = coordinates[1][0];
    let y2 = coordinates[1][1];
    
    const angle = (y2-y1)/(x2-x1);
    let result = true;
    for(let i=2;i<coordinates.length;i++){
        x2 = coordinates[i][0];
        y2 = coordinates[i][1];
        
        if( (y2-y1)/(x2-x1) != angle){
            result = false;
            break;
        }
    }
    return result;
};