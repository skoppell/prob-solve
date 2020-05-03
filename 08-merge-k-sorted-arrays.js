/* Q-8

Question : Given k sorted arrays, merge them into a single sorted array. 

*/


function merge(...arrays){
    if(arrays.length > 1){
        const [ one, two, ...rest ] = arrays;
        const result = mergeTwo(one, two);
        const next = [result, ...rest];
        return merge.apply(this, next);

    }else {
        return arrays[0]
    }

    function mergeTwo(arr1, arr2){
        let i = 0;
        let j = 0;
        const result = [];
        while(i<arr1.length && j<arr2.length){
            const first = arr1[i];
            const second = arr2[j];

            if(first < second){
                result.push(first);
                i++;
            }else if(first > second){
                result.push(second);
                j++;
            }else{
                result.push(first);
                result.push(second);
                i++;
                j++;
            }
        }

        if(i < arr1.length){
            while(i<arr1.length){
                result.push(arr1[i]);
                i++;
            }
        }else if(j < arr2.length){
            while(j<arr2.length){
                result.push(arr2[j]);
                j++;
            }
        }
        return result;
    }

}