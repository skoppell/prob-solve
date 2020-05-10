/*

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false

*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    if(num == 0 || num == 1)  return true;
    
    let left=2;
    let right=Math.floor(num/2);
    
    while(left <= right){
        let mid = Math.floor(left + (right-left)/2);
        if(mid * mid == num) return true;
        if(mid * mid > num){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return false;
};