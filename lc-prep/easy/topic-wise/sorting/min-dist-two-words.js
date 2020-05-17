/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
*/

function solve(words, word1, word2){
    if(words.length == 2) return 1;

    let p1=-1;
    let p2=-1;
    let minDist = Number.POSITIVE_INFINITY;
    while(p1 < words.length && p2 < words.length){

        while(words[p1] != word1 && p1 < words.length){
            p1++;
        }
        if(p2 > -1){
            minDist = Math.min(minDist, Math.abs(p2-p1));
            p2++;
        }
        while(words[p2] != word2 && p2 < words.length){
            p2++;
        }
        if(p1 > -1){
            minDist = Math.min(minDist, Math.abs(p2-p1));
            p1++;
        }
    }
    return minDist;
}