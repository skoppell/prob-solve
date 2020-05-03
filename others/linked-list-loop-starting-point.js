/*

Find the starting point of the loop in circular linkedlist

a -> b -> c -> d -> e -> f -> g -> i
          |________________________|

-----------    ----------------
     D                  K
           -------------------------
                      C

D = length till loop start
K = length of the nodes from start to meeting point
C = length of the circulat loop.

if the slow and fast pointers moved and met at K nodes after D... 
so slow pointer will move N nodes =  D + C * n1 + K
and fast pointer will move 2N nodes = D + C * n2 + K

2(D + C * n1 + K) = D + C * n2 + K

D + K = C(n2 - 2n1)

D = C(n2 - 2n1) - K

which means .. when a pointer travels D steps ... then a pointer starting at the meeting point ... will be at a point where it is K nodes short
of looping C(n2-n1) full circles.  and "K" nodes short means .. start of the loop. 

So, once the slow and fast pointer meets at the meeting point ... if we start a pointer from start of the list ..and keep on moving both pointers 
..they will meet at the starting of the loop. (which is K nodes behing the starting point and 'D' steps after the LL start)
          
*/

/*
function Node(val) {
    this.data = val;
    this.next = null;
}

function buildData(){
    let n1 = new Node("m");
    let n2 = new Node("a");
    let n3 = new Node("d");
    let n4 = new Node("a");
    let n5 = new Node("m");

    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    return n1;
}

*/
function loopStart(input){

    let slow = input.next;
    let fast = input.next.next;

    while(slow === fast){
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = input;

    while(slow = fast){
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}