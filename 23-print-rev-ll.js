/*
Q-23
Given   a   linked   list,   write   a   function   that   prints   the   nodes   of   the   list   in  
reverse order.


approach 1: Reverse the LL and print.
    - have to iterate two times the LL.
    - if orignial LL is not to be changed ... we hv to make a copy

approach 2: Recursive. 
    - simpler
    - list is not modified
    - but space wise ... its more .. because of recursive stack space.

*/

function Node(val){
    this.val = val;
    this.next = null;
}

function buildLL() {
    let n1 = new Node(1);
    let n2 = new Node(2);
    let n3 = new Node(3);
    let n4 = new Node(4);
    let n5 = new Node(5);

    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
}

function pRev(input){

    if(input == null){
        return;
    }
    const val = input.val;
    pRev(input.next);
    console.log(val);
}