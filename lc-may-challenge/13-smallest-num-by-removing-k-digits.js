/*
  Remove K Digits

Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    
    let result = "";
    solve(num,k,0);
    
    let zerosCount = 0;
    for(let i=0;i<result.length;i++){
        if(result.charAt(i) == 0){
            zerosCount++;
        }else{
            break;
        }
    }
    
    result = result.substring(zerosCount);
    return result.length == 0 ? "0" : result;
        
    function solve(num,k, startIndex){
        if(k==0) {
            result = result + num.substring(startIndex);
            return;
        }
        
        if(num.length - startIndex <= k){
            return;
        }
        
        const firstKPlusOneString = num.substring(startIndex,startIndex+k+1);
        const firstKPlusOneCharsArr = firstKPlusOneString.split('');
        
        const leastChar = firstKPlusOneCharsArr.sort()[0];
        
        result = result + leastChar;
        
        const leastCharIndex = firstKPlusOneString.indexOf(leastChar);
        solve(num, k-leastCharIndex, startIndex + leastCharIndex+1);
    }
    
};