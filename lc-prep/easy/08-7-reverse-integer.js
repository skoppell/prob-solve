/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */

 /* 
    js number 64 bit. 0-51, 52-62 and 63 bits. 
    checking overlow in js 
        c = a+b; 
        if a ! = c-b || b != c-a ..then overflow.
 */
var reverse = function(x) {
    let isNegative = false;
    if(x < 0){
        isNegative = true;
        x = -1 * x;
    }
    x = (''+x).split('').reverse().join('');
    x = Number.parseInt(x);
    if(isNegative){
        x = -1 * x;
    }
    if(x > Math.pow(2, 31)-1 || x < ((-1) * Math.pow(2,31))) 
        return 0;
    
    return x;
};