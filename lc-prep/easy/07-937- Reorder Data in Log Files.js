/*
You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

 

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
 

Constraints:

0 <= logs.length <= 100
3 <= logs[i].length <= 100
logs[i] is guaranteed to have an identifier, and a word after the identifier.
*/

/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    
    // js sort is not stable. so .. filter the letter and digit logs .. sort the letter logs using custom comparator and append the digit logs at end.
    // or we can make a stable sort in js ... by adding an index to each elemnt the array . when comparator returns 0 . .using index to sort them.
    
    const digitLogs = [];
    const letterLogs = [];
    for(let i=0;i<logs.length;i++){
        const log = logs[i];
        const splitLog = log.split(' ');
        const isLetterLog = isNaN(Number.parseInt(splitLog[1]));
        if(isLetterLog){
            letterLogs.push(log);
        }else{
            digitLogs.push(log);
        }
    }
    
    letterLogs.sort(function(logA, logB){
        const splitLogA = logA.split(' '); 
        const logAId = splitLogA[0];
        const remainingLogA = splitLogA.slice(1).join(' ');
        
        const splitLogB = logB.split(' '); 
        const logBId = splitLogB[0];
        const remainingLogB = splitLogB.slice(1).join(' ');
        
         if(remainingLogA < remainingLogB) return -1;
            else if(remainingLogA > remainingLogB) return 1;
            else {
                
                if(logAId < logBId) return -1;
                else if(logAId > logBId) return 1;
                else return 0;
            }
    });
    
    return [...letterLogs, ...digitLogs];
};