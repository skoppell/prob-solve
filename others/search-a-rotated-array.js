/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.


[4,5,6,7,0,1,2], 0
         ^

*/


function search(arr, k){
    let start = 0;
    let end = arr.length -1;
    while(start <= end){
        let mid = Math.floor((start + end))/2;

        if(arr[mid] == k){
            return mid;
        }else{
            if(arr[start] < arr[mid] && (arr[start] < k  && k < arr[mid])){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }
    }
    return -1;
}