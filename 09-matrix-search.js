/*
Q-9

Given   an   n   x   m   array   where   all   rows   and   columns   are   in   sorted   order,  
write a function to determine whether the array contains an element x. 

   1  2  3  5
   4  6  8  9
   7 10 11 12


*/

function matrixSearch(matrix, num){
    let possibleRowStart = 0;
    let possibleColEnd = matrix[0].length-1;
    
    while(possibleRowStart < matrix.length && possibleColEnd > -1){
        const firstEleInCol = matrix[possibleRowStart][possibleColEnd];
        if(firstEleInCol == num){
            return true;
        }
        
        if(num < firstEleInCol){
            possibleColEnd = possibleColEnd - 1;
        }
        
        if(num > firstEleInCol){
            possibleRowStart = possibleRowStart + 1;
        }

    }
}