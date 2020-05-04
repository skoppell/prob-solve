/* 

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

*/

/**
 * @param {string} ransomNote
 * @param {string} get(char)+1
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    const ransomMap = new Map();
    for(let i=0;i<ransomNote.length;i++){
        const char = ransomNote.charAt(i);
        if(ransomMap.has(char)){
            ransomMap.set(char,ransomMap.get(char)+1);
        }else{
            ransomMap.set(char,1);
        }
    }
    
    for(let i=0;i<magazine.length;i++){
        const magChar = magazine.charAt(i);
        if(ransomMap.has(magChar)){
            const mapValue = ransomMap.get(magChar);
            if(mapValue == 1){
                ransomMap.delete(magChar);
            }else{
                ransomMap.set(magChar,mapValue-1);   
            }
        }
    }
    return ransomMap.size == 0;
};