/*
 Heap Sort the given array. or Build a max-heap for the given array.
*/

function buildHeap(arr){

    for(let i=n/2-1;i<=0;i--){
        heapify(arr, i);
    }
    
    function heapify(arr, index){
        const parent = arr[index];
        const leftChildIndex = 2*index+1;
        const rightChildIndex = 2*index+2;

        if(arr[index] > arr[leftChildIndex] && arr[index] > arr[rightChildIndex]){
            continue;
        }

        if(arr[leftChildIndex] > arr[index] && arr[leftChildIndex] >= arr[rightChildIndex]){
            let temp = arr[index];
            arr[index] = arr[leftChildIndex];
            arr[leftChildIndex] = temp;
        }
        if(arr[rightChildIndex] > arr[index] && arr[rightChildIndex] >= arr[leftChildIndex]){
            let temp = arr[index];
            arr[index] = arr[rightChildIndex];
            arr[rightChildIndex] = temp;
        }
    }
    return arr;
}