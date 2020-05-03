/*

Q-10;

Question :   Given   2   sorted   arrays,   A   and   B,   where   A   is   long   enough   to   hold   the  
contents   of   A   and   B,   write   a   function   to   copy   the   contents   of   B   into   A   without  
using any buffer or additional memory. 

A = {1,3,5,0,0,0} 
B = {2,4,6} 
mergeArrays(A, B) 
A = {1,2,3,4,5,6} 

same as normal merge .. but the arr1 has extra space at the end, we can reverse the logic of merge.
basically, copy the larger item to end rather than copyin smaller elem from start. (also maintaing the index to where to copy to)
*/

function merge(arr1, arr2){
    let copyToIndex = arr1.length-1;
    let i = arr1.length-1;
    while(arr1[i] == 0){
        i = i-1;
    }
    let j = arr2.length-1;

    while(j>-1){
        const num1 = arr1[i];
        const num2 = arr2[j];
        if(num1 > num2){
            arr1[copyToIndex] = num1;
            i--;
            copyToIndex--;
        }else if(num2 > num1){
            arr1[copyToIndex] = num2;
            j--;
            copyToIndex--;
        }else{
            arr1[copyToIndex] = num1;
            i--;
            copyToIndex--;
            arr1[copyToIndex] = num2;
            j--;
            copyToIndex--;
        }
    }
    return arr1;
}