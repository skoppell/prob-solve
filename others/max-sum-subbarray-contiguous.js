/*
Find the contiguous subarray within an array, A of length N which has the largest sum.

[1, 2, 3, 4, -10]
10

[-2, 1, -3, 4, -1, 2, 1, -5, 4]
6

[4, -1, 2, 1]
6
*/

function maxSum(a){
    let maxSum = a[0];
    let maxStart = 0;
    let maxEnd = 0;

    let tempSum = a[0];
    let tempStart=0;
    let tempEnd = 0;
    for(let i=1;i<a.length;i++){
        let newSum = tempSum + a[i];    
        if(newSum > tempSum){               
            tempEnd = i;                    
        }
        if(newSum < a[i]){                  
            tempStart = i;                  
            tempEnd = i;                    
            //newSum = a[i];                  
        }
        tempSum = Math.max(a[i],newSum);    
        if(tempSum > maxSum){               
            maxSum = tempSum;               
            maxStart = tempStart;           
            maxEnd = tempEnd;               
        }
    }

    return {
        sum: maxSum,
        range: a.slice(maxStart,maxEnd+1)
    }
}


/* function simpler(nums){

    let max = nums[0];
    for(let i=1;i<nums.length;i++){
        n[i] = (n[i-1] > 0)  ?  n[i] + n[i-1] : n[i];
        max = Math.max(max, n[i]);
    }
    return max;
}*/