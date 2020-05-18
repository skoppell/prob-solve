/*
  Permutation in String
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

 

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False
 

Note:

The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
    if(s2.length < s1.length) return false;
    
    const cache = new Map();
    for(let i=0;i<s1.length;i++){
        const char = s1.charAt(i);
        if(cache.has(char)){
            cache.set(char,cache.get(char)+1);
        }else{
            cache.set(char,1);
        }
    }
    
    let i=0;
    const charMap = new Map();
    while(i < s2.length){
        const char = s2.charAt(i);
        if(charMap.has(char)){
            charMap.set(char, charMap.get(char)+1);
        }else{
            charMap.set(char,1);
        }
        
        if(i>s1.length-1){
            const removeChar = s2.charAt(i-s1.length);
            if(charMap.has(removeChar)){
                charMap.set(removeChar, charMap.get(removeChar)-1);
                if(charMap.get(removeChar) == 0){
                    charMap.delete(removeChar);
                }
            }
        }
        
        if(isEq(cache, charMap)){
            return true;
        }
        i++;
    }
    return false;
    
    function isEq(map1, map2){
        const sizeEq = map1.size == map2.size;
        if(sizeEq){
            for(let [k,v] of map1){
                const entryEq = map2.has(k) && map2.get(k) === v;
                if(!entryEq){
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    
};