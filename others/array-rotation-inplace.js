/*

Given an array, rotate the array to the right by k steps, where k is non-negative.

we hv to do this in-place i.e O(1) memory. and O(n)

[a,b,c,d,e] 4
       
[-1,-100,3,99] , 2

*/


function rotate(arr, k){
    const actualK = k%arr.length;
    let count=0;
    for(let i = 0; count<arr.length; i++){
        const start = i;
        let temp = arr[i];
        let temp2;
        while(count < arr.length){
            const targetIndex = (i+actualK)%arr.length;
            
            temp2 = arr[targetIndex];
            arr[targetIndex] = temp;
            temp=temp2;

            i = targetIndex;
            count++;
            if(targetIndex == start){
                break;
            }
        }
    }
    return arr;
}