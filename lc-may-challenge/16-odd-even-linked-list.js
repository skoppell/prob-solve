/*
  Odd Even Linked List
Solution
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
Note:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    
    if(head == null || head.next == null || head.next.next == null) return head;
    
    let odd = head;
    let even = head.next;
    let evenStart = even;
    
    while(even != null && even.next != null){
        odd.next = even.next;
        odd = odd.next;
        
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenStart;
    return head;
    
    // below approach is to count the # of nodes and move even node (which are n/2 in count) to the end of the LL
//     if(head == null) return head;
    
//     let nodeCount = 0;
    
//     let lastNode = head;
//     let counter = head.next;
//     while(counter != null){
//         lastNode = counter;
//         counter = counter.next;
//         nodeCount++;
//     }
//     nodeCount++;
    
//     if(nodeCount == 2){
//         return head;
//     }
    
//     let evenNodeCount = Math.floor(nodeCount/2);
    
//     let odd = head;
//     let even = head.next;
    
//     while(evenNodeCount > 0){
//         odd.next = odd.next.next;
//         lastNode.next = even;
//         even.next = null;
        
        
//         lastNode = even;
        
//         odd = odd.next;
//         even = odd.next;
        
//         evenNodeCount--;
//     }
//     return head;
};