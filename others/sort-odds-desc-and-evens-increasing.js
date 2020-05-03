/*

Sort all even numbers in ascending order and then sort all odd numbers in descending order
Given an array of integers (both odd and even), sort them in such a way that the first part of the array contains odd numbers sorted in descending order, rest portion contains even numbers sorted in ascending order.

Input  : arr[] = [1, 2, 3, 5, 4, 7, 10,11]
Output : arr[] = [11,7, 5, 3, 1, 2, 4, 10]

Input  : arr[] = [0, 4, 5, 3, 7, 2, 1]
Output : arr[] = [7, 5, 3, 1, 0, 2, 4]

1)  segrate the odd and evens to first half and 2nd half - O(n)
    sort the first half and sort second half - log(n)

2)  make all odds negative.
    sort
    make all odds positive. 
    (this may not work if array has -ve odds. )

3)  use comparator
*/

function sort(arr){
    return arr.sort(function(a,b){
        const aEven = (a%2 == 0);
        const bEven = (b%2 == 0);
        if(aEven && bEven){
            if(a < b) return -1;
            else if( a > b) return 1;
            else return 0;
        }else if(!aEven && !bEven){
            if(a < b) return 1;
            else if( a > b) return -1;
            else return 0;
        }else if( aEven && !bEven) {
            return 1;
        }else if( !aEven && bEven){
            return -1;
        }
    });
}