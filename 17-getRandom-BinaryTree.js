/* Q-17
Implement   a   binary   tree   with   a   method   getRandomNode()   that   returns  
a random node. 


           D(3)

     B(1)         F(4)

 A(0)   C(2)   E(5)   G(6)
 
 
abvoe rep:  node(index)


if all the nodes are part of an array, and if we generate a random index for that array  .. our prob will be solved. 

So, lets assume that each of the node has an index. (startng from leftmost node of the tree)


Also, as we are implementing the tree ourselves, we are free to modify the default impl. 

so to solve this ...  the approach would be 
- store the child count for each node in the tree. 

and when asked for a random node, 

- pick a random value % node_count (which is our random index)

now we have to find the element at our random index. 

if index = (curr_node.left.childCount +1 ) ... then return it
if index < (curr_node.left.childCount +1 ) ...  go left and recurse with same index value. 
if index >(curr_node.left.childCount +1 )...  go right and recurse with (index - (curr_node.childCount+1)).

*/

function Node(){
    this.left;
    this.right;
    this.children;
    this.value;
}

function BinTree() {
    this.root = null;
    this.nodeCount = 0;

}

BinTree.prototype.getRandomNode = function() {
    let randomIndex = Math.floor(Math.random() * this.nodeCount);
    return getRandomNodeInternal(this.root, randomIndex);

    function getRandomNodeInternal(node, index){
        const leftChildren = node.left.children + 1;
        if(index == leftChildren) 
            return node;
        if( index < leftChildren)
            return getRandomNodeInternal(node.left, index);
        
        if(index > leftChildren){
            index = index - (leftChildren+1);
            return getRandomNodeInternal(node.right, index);
        }
    }
}





