/*

Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that 
finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

"figehaeci" and {a,e,i}  => aeci
           
           0 1 2 3 4 5 6 7 8
           f i g e h a e c i
    start              ^
    end                      ^

       mS  5
       mE  8
tempCount  4

*/

function find(input1, input2){
    debugger;
    const map = {};
    input2.split('').forEach( (char) => {
        map[char] = { 
            required: 1,
            parsed: 0
        };
    });

    let start = 0;
    let end = 0;
    let minStr = input1;
    let input2Count = input2.length;
    let tempCount = 0;
    let tempMin = "";

    let minStrStart = 0;
    let minStrEnd = input1.length;
    while(start <= end){
        while(tempCount != input2Count && end < input1.length){
            let char = input1[end];
            if(map.hasOwnProperty(char)){
                if(map[char].parsed < map[char].required){
                    tempCount++;
                }
                map[char].parsed = map[char].parsed + 1;
                
            }
            end++;
        }
        if(  (((end-1)-start)+1) <= ((minStrEnd - minStrStart)+1) ){
            minStrEnd = end-1;
        }

        while(tempCount == input2Count){
            let startChar = input1[start];
            if(map.hasOwnProperty(startChar)){
                map[startChar].parsed = map[startChar].parsed - 1;
                if(map[startChar].parsed < map[startChar].required){
                    tempCount--;
                }
                
            }
            start++;
        }

        if(  (((end-1)-(start-1))+1) <= ((minStrEnd - minStrStart)+1) ){
            minStrStart = start-1;
        }

        if(end >= input1.length){
            break;
        }
    }

    return input1.slice(minStrStart, minStrEnd+1);

}