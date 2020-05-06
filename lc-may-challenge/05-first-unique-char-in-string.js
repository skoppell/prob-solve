/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const _arr = new Array(26).fill(-1);
    for(let i=0;i<s.length;i++){
        const charCode = s.codePointAt(i) - "a".codePointAt(0);
        if(_arr[charCode] == -1){
            _arr[charCode] = i;
        }else {
            _arr[charCode] = -2;
        }
    }
    let index = s.length;
    for(let i=0;i<26;i++){
        if(_arr[i] != -1 && _arr[i] != -2){
            index = Math.min(index, _arr[i]);
        }
    }
    return index == s.length ? -1 : index;
};