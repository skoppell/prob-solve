/*

find longes consequence in the array

   [100, 4, 200, 1,  3,  2]


   apart from below one more approach is .. sort the array. 
   whenever an unsorted thing comes up ... check is sorting if will help.

   sorting approach is n log(n). 

   but below approach of keeping it everyone map and ignore if a en element has above and below present in the map again.
   we are not intrsted in such elem as it only is part of the sequence. we only want to check either the start of the seq or end of seq.
   
   with this we get O(n)


*/

function find(arr){
    const map = {};
    arr.forEach( (elem,index) =>  {
        map[elem] = 1;
    });

    let max = 1;
    for(let i=0;i<arr.length;i++){
        const current = arr[i];
        
        let abv = current+1;
        let below = current-1;
        const abvExists = map.hasOwnProperty(abv);
        const belowExist = map.hasOwnProperty(below);
        if(abvExists && belowExist){
            continue;
        }else if(abvExists || belowExist){
            let tempMax = 1;
            if(abvExists){
              while(map.hasOwnProperty(abv)){
                  tempMax++;
                  abv = abv+1;
              }  
            }else if(belowExist){
                while(map.hasOwnProperty(below)){
                    tempMax++;
                    below = below+1;
                } 
            }
            if(tempMax > max){
                max = tempMax;
            }
        }
    }
    return max;
}
