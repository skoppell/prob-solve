/*
Q-20

Given   a   stack,   reverse   the   items   without   creating   any   additional   data  
structures. 
reverse(1‐>2‐>3) = 3‐>2‐>1

*/

// default stack impl with push, pop and empty methods.
function Stack(){
    data = [];
    indexToPush = 0;
	lastIndex=-1;
    return {
		print: function() { console.log(data); },
        push: function(val){
            if(val != undefined){
                data[indexToPush] = val;
                indexToPush++;
				lastIndex++;
            }
        },

        pop: function(){;
            if(lastIndex >= 0){
                const popVal = data[lastIndex];
                data[lastIndex] = undefined;
                lastIndex--;
				indexToPush--;
                return popVal;
            }
            return undefined;
            
        },

        isEmpty: function(){
            return indexToPush == 0;
        }
    }
}
// ----- 


function reverse(input){
   if(input.isEmpty()){
        return input;
    }
    const curr = input.pop();
    reverse(input);
    insertAtEnd(input, curr);
	return input;
}

function insertAtEnd(stack, val){
    if(stack.isEmpty()){
        stack.push(val);
    }else {
        const temp = stack.pop();
        insertAtEnd(stack, val);
        stack.push(temp);
    }
}