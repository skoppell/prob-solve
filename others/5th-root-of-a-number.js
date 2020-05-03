/*
Fifth root of a number

approach 1: 
start with result=0
and keep incrementing result until pow(result,5) <= N. 
O(n)

approach 2:
choose mid as from N/2.  if pow(n/2,5) < N ..then mid = (mid+1 + N)/2; else mid = (0+ mid-1)/2; (binary search)
O(log(n))
*/

function fifthRoot(num){
    let start = 0;
    let end = num;
    while(start <= end && k > 0){
        let mid = Math.floor((start + end)/2);
        let pow = Math.pow(mid,5);
        if( pow < n){
            start = mid + 1;
        }else if(pow > n){
            end = mid -1;
        }else {
            return mid;
        }
    }
    return;
}