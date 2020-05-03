/*
Q-11
Question :   Given   an   array,   write   a   function   to   find   any   subarray   that   sums   to   zero,  
if one exists.

zeroSum({1, 2, ‐5, 1,  2, ‐1}) = [2, ‐5, 1, 2]
         1  3  -2  -1  1   0
*/

function zeroSum(arr){

    const sumsArray = [];
    let sumTillNow = 0;
    let sumMap = {};
    let start = 0;
    let end = 0;
    arr.forEach( (elem, index) => {
        sumTillNow = sumTillNow + elem;
        if(sumMap.hasOwnProperty(sumTillNow)){
            const oldIndex = sumMap[sumTillNow];
            start = oldIndex + 1;
            end = index + 1;
        }else{
            sumMap[sumTillNow] =  index;
        }
    });
    return arr.slice(start, end);
}