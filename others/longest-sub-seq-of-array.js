/*

Longest Increasing Subsequence

LIS of [10, 22, 9, 33, 21, 50, 41, 60, 80] is 6.  => [10, 22, 33, 50, 60, 80] or [10, 22, 33, 41, 60, 80]

*/

/* recursive way */
function lis(arr){
    let maxLis = 1;
    for(let j=0;j<arr.length;j++){
        const tempLis = solveLis(arr, j, arr.length-1)
        results.push(tempLis);
        if(tempLis > maxLis){
            maxLis = tempLis;
        }
    }
    
    function solveLis(arr, start){
        if(start == arr.length-1){
            return 1;
        }else{
            const ignoredElem = arr[start];
            const ignoreOneLis = solveLis(arr, start+1);
            if(ignoredElem < arr[start+1]){
                return ignoreOneLis + 1;
            }else{
                return ignoreOneLis;
            }

        }
    }
    return maxLis;
}

/* DP way 

[10, 22, 9, 33, 21, 50, 41, 60, 80] = 6
             i
  j     


[ 1,  2, 1,  1,  1,  1,  1,  1,  1]

2
*/
function lis(arr){
    const results = new Array(arr.length).fill(1);

    let maxLis = 1;
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[j] < arr[i]){
                results[i] = Math.max(results[j] + 1, results[i]);
                if(results[i] > maxLis){
                    maxLis = results[i];
                }
            }
        }
    }
    return maxLis;

}