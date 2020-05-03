/*

Q-13
Implement   N   >   0   stacks   using   a   single   array   to   store   all   stack   data  
(you   may   use   auxiliary   arrays   in   your   stack   object,   but   all   of   the   objects   in   all   of  
the   stacks   must   be   in   the   same   array).   No   stack   should   be   full   unless   the   entire  
array is full. 


N = 3; 
capacity = 10; 
Stacks stacks = new Stacks(N, capacity); 
stacks.put(0, 10); 
stacks.put(2, 11); 
stacks.pop(0) = 10; 
stacks.pop(2) = 11; 

*/

function NStacks(N, capacity){

    this.data = new Array(capacity);

    this.topOfStack = new Array(N).fill(-1);
    this.nextIndexForIndex = new Array(capacity);
    this.nextIndexForIndex.forEach( (element,index ) => {
        this.nextIndexForIndex[index] = index+1;
        if(index == capacity){
            this.nextIndexForIndex[index] = -1;
        }
    });
    this.nextIndex = 0;
}

NStacks.prototype.put = function(stackIndex, number) {
    debugger;
    this.data[this.nextIndex] = number;
    const prevTopofStack = this.topOfStack[stackIndex];
    this.topOfStack[stackIndex] = this.nextIndex;
    this.nextIndex = this.nextIndexForIndex[this.nextIndex];
    this.nextIndexForIndex[this.nextIndex] = prevTopofStack;
}

NStacks.prototype.pop = function(stackIndex) {
    debugger;
    const popElem = this.data[this.topOfStack[stackIndex]];
    
    this.data[this.topOfStack[stackIndex]] = undefined;
    
    const prevNextIndex = this.nextIndex;
    this.nextIndex = this.topOfStack[stackIndex];

    const prevTopofStack = this.nextIndexForIndex[this.topOfStack[stackIndex]];
    this.nextIndexForIndex[this.topOfStack[stackIndex]] = prevNextIndex;

    this.topOfStack[stackIndex] = prevTopofStack;

    return popElem;
}

NStacks.prototype.print = function(stackIndex, number) {
    console.log("-----------CURRENT STATE--------------------");
    console.log("Top of Stack", this.topOfStack);
    console.log("Data", this.data);
    console.log("nextIndexOfIndex", this.nextIndexForIndex);
    console.log("nextIndex", this.nextIndexForIndex);
    console.log("--------------------------------------------");
    console.log("");
    console.log("",);
}

s = new NStacks(3, 10);

s.put(0,1);
s.put(1,2);
s.put(2,3);
s.put(1,4);
s.pop(2);
s.pop(1);