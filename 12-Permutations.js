/* 
Q-12
Write a function that returns all permutations of a given list. 

permutations({1, 2, 3}) 
[1, 2, 3] 
[1, 3, 2] 
[2, 1, 3] 
[2, 3, 1] 
[3, 1, 2] 
[3, 2, 1] 

*/

function perm(arr){
    const allPerms = [];
    if(arr.length > 1){
        const lastEl = arr[arr.length-1];
        const remaining = arr.slice(0, arr.length-1);
        const subset = perm(remaining);
        for(let j=0;j<subset.length;j++){
            const eachSubPerm = subset[j];
            const slots = eachSubPerm.length+1;
            for(let i=0;i<slots;i++){
                const temp = [...eachSubPerm];
                temp.splice(i, 0, lastEl);
                allPerms.push(temp);
            }
        }
        return allPerms;
    }else{
        return [arr];
    }
}


function perm(arr){

    const results = [];
    perm(arr, 0, results);

    function perm2(arr, start, results){
        if(start >= arr.length){
            results.push([...arr]);
        }else{
            for(let i=start;i<arr.length; i++){
                swap(a, start, i);
                perm2(a, start+1, results);
                swap(a, start, i)
            }
        }
    }
    
    function swap(arr, left, right){
        let temp = arr[right];
        arr[right]=arr[left];
        a[left]=temp;
    }
}