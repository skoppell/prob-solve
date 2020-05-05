/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let result = 0;
    
    let opr1 = num1;
    let opr2 = num2;
    
    while(true){
        const equals = makeStrsEqualLength(opr1, opr2);
        const op1 = equals[0];
        const op2 = equals[1];
        
        const resultArr = addStrings(op1, op2);
        if(Number.parseInt(resultArr[1]) == 0){
            result = resultArr[0];
            break;
        }else{
            opr1 = resultArr[0];
            opr2 = resultArr[1];
        }
    }
    return result;
    
    function addStrings(str1, str2){
        let lastIndex = str1.length-1;
        let resultStr = "";
        let overflowStr = "0";
        for(let i=lastIndex;i>=0;i--){
            const digit1 = Number.parseInt(str1.charAt(i));
            const digit2 = Number.parseInt(str2.charAt(i));
            resultStr =  ((digit1 + digit2)%10) + resultStr;
            overflowStr = ((digit1 + digit2)/10) + overflowStr;
        }
        return [resultStr, overflowStr];
    }

    function makeStrsEqualLength(str1, str2){
        const str1Length = str1.length;
        const str2Length = str2.length;
        if(str1Length > str2Length){
            let diff = (str1Length - str2Length);
            let patchString = "";
            for(let i=0;i<diff;i++){
                patchString = patchString + "0";
            }
            str2 = patchString + str2;
        }else{
            let diff = (str2Length - str1Length);
            let patchString = "";
            for(let i=0;i<diff;i++){
                patchString = patchString + "0";
            }
            str1 = patchString + str1;
        }
        return [str1, str2];
    }
};