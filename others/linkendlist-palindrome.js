/*
   Linkend list palindrome
*/

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

const input = buildData();


function palindrome(input) {
    const stack = [];
    let slow = input;
    let fast = input;

    while(fast.next != null && (fast.next && fast.next.next != null)){
        slow = slow.next;
        fast = fast.next.next;
    }

    let oddCase = false;
    let evenCase = false;
    if(fast.next == null){
        oddCase = true;
    }else if(fast.next.next == null){
        evenCase = true;
    }

    fast = input;
    while(true){
        stack.push(fast.data);
        if(fast == slow)  break;
		fast = fast.next;
    }
    if(oddCase){
        stack.pop();
    }
	fast = fast.next;
    while(fast != null){
        const pop = stack.pop();
 		if(fast.data != pop){
            return false;
        }
        fast = fast.next;
    }
    return (stack.length == 0);
}


/*
actually rather than finding the middle and then pushing first half and popping second half .. 
better is ... push all element to stack first. 
pop all elements in second loop. 
*/