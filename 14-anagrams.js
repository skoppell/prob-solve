/*
Q-14

Given   two   strings,   write   a   function   to   determine   whether   they   are  
anagrams

isAnagram("", "") = true 
isAnagram("A", "A") = true 
isAnagram("A", "B") = false 
isAnagram("ab", "ba") = true 
isAnagram("ABa", "ab") = true

PS: in below apprach ... instead of plain map ..we can create a array of length 256 (because alphabet size)
and set values to 1 and 0 to know the result.
*/

function isAnagram(input1, input2){

    let result = false;

    input1 = input1.toLowerCase();
    input2 = input2.toLowerCase();
    const cache = {};
    let charCount = 0;
    input1.split('').forEach( (char) => {
        if(cache.hasOwnProperty(char)){
            cache[char] = cache[char]+1;
        }else{
            cache[char] = 1;
            charCount++;
        }
    });

    for(let i=0; i<input2.length;i++){
        const char2 = input2.charAt(i);
        if(cache.hasOwnProperty(char2)){
            cache[char2] = cache[char2]-1;
            charCount--;
        }
    }

    return charCount == 0;
}