/* 
Q-7
● Question:   Given   a   2D   array   of   1s   and   0s,   find   the   largest   square   matrix   of   all  
1s. 
● Eg. Given a 2D array of 1s and 0s, find the largest square subarray of all 1s. 

Answer : https://www.byte-by-byte.com/squaresubmatrix/ 


[ 1 1 1 0 ]
[ 1 1 1 1 ]
[ 1 1 1 0 ]

ans = 2

[ 1 1 1 0 ]
[ 1 2 2 1 ]
[ 1 2 3 0 ]
*/

function sol(input){
    const rowCount = input.length;
    const colCount = input[0].length;
    const tempArray = new Array(rowCount).fill(new Array(colCount)).map( (row) => row.fill(0));
    for(let t = 0; t<colCount; t++){
        tempArray[0][t] = input[0][t];
    }
    for(let t = 0; t<rowCount; t++){
        tempArray[t][0] = input[t][0];
    }

    let maxSize = 0;
    for(let t = 1; t < rowCount; t++){
        for(let t2 = 1; t2 < colCount; t2++){
            if(input[t][t2] == 0){
                tempArray[t][t2] = 0;
            }else {
                const min = Math.min(tempArray[t-1][t2], tempArray[t][t2-1], tempArray[t-1][t2-1]);
                if(min == 0){
                    tempArray[t][t2] = input[t][t2];
                }else{
                    tempArray[t][t2] = min + 1;
                }
                if(maxSize < tempArray[t][t2]){
                    maxSize = tempArray[t][t2];
                }
            }
        }
    }
    console.log(tempArray);
    return maxSize;
}