/*
Find All Anagrams in a String
Solution
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
    if(s.length == 0) return [];
    if(p.length > s.length) return [];
    
    const cache = new Map();
    p.split('').forEach( char => {
        if(cache.has(char)){
            cache.set(char, cache.get(char) + 1);
        }else{
            cache.set(char, 1);
        }
    });
    
    let result = [];
    let sMap = new Map();
    for(let i=0;i<s.length;i++){
        const sChar = s.charAt(i);
        
        if(sMap.has(sChar)){
            sMap.set(sChar,sMap.get(sChar)+1);
        }else{
            sMap.set(sChar,1);
        }
        
        if(i > p.length-1){
            const oldChar = s.charAt(i-p.length);
            sMap.set(oldChar, sMap.get(oldChar)-1);
            if(sMap.get(oldChar) == 0){
                sMap.delete(oldChar);
            }
        }
        
        if(isEq(cache, sMap)){
            result.push(i-(p.length-1));
        }
    }
    return result;
    
    function isEq(cache1, cache2){
        let one = (cache1.size == cache2.size);
        if(!one){
            return false;
        }
        
        for(let [k,v] of cache1){
            let eq = cache2.has(k) && cache2.get(k) == v;
            if(!eq){
                return false;
            }
        }
        return true;
    }
};