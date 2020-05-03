/*
Given an array A[], write a function that segregates even and odd numbers. The functions should put all even numbers first, and then odd numbers.
Input  = {12, 34, 45, 9, 8, 90, 3}
Output = {12, 34, 8, 90, 45, 9, 3}

approach: take 2 pointer i and j. 
i = 0
j = n-1

i++ till u see an odd
j-- till you see an even
swap.
repeat.
*/

function seg(array){
    let i=0;
    let j=array.length-1;

    while(i<=j){
        while(a[i]%2 == 0){
            i++;
        }
        while(a[j]%2 != 0){
            j--;
        }
        if(i<j){
            swap(arr, i, j);
        }
    }

    function swap(arr, i, j){
        const tmp = arr[i];
        a[i]=a[j];
        a[j]=tmp;
    }

}