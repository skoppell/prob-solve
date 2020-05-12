/*
Single Element in a Sorted Array
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

 

Example 1:

Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: [3,3,7,7,10,11,11]
Output: 10
 

Note: Your solution should run in O(log n) time and O(1) space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    /* a better variant than below is to choose mid such that mid is always even. */
    
    /*  pick mid ..and choose the odd numbered half. */
    if(nums.length == 1) return nums[0];
    
    if(nums[0] != nums[1]) return nums[0];
    if(nums[nums.length-1] != nums[nums.length-2]) return nums[nums.length-1];
    
    let left = 0;
    let right = nums.length-1;
    
    
    while(left <= right){
        let mid = Math.floor(left + (right-left)/2);
        const elem = nums[mid];
    
        if(elem > nums[mid-1] && elem < nums[mid+1]){
            return elem;
        }
        
        if(elem == nums[mid-1]){
            if((mid-left+1)%2  == 0) {
                 left = mid+1;
            }else{
                right = mid;
            }
        }else {
            if((right-mid+1)%2  == 0) {
                 right = mid-1;
            }else{
                left = mid;
            }
        }
    }
};