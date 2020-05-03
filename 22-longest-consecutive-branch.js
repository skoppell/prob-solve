/* Q-22
Given   a   tree,   write   a   function   to   find   the   length   of   the   longest   branch   of  
nodes in increasing consecutive order.
        0
    1       2
  1    2   1  3
  
  ans = 3; (0,1,2) branch
*/
function lcb(node){

    if(node == null){
        return 0;
    }
    
    const leftLcb = lcb(node.left);
    const rightLcb = lcb(node.right);

    let currentNodeLcb = 1;
    
    let temp1 = 0;
    let temp2 = 0;
    
    if( node.left == null || (node.val - node.left.val) == -1){
        temp1 = leftLcb + 1;
    }else {
        temp1 = leftLcb;
    }

    if( node.right == null || (node.val - node.right.val) == -1){
        temp2 = rightLcb + 1;
    }else{
        temp2 = rightLcb;
    }

    currentNodeLcb = Math.max(temp1, temp2);
    return currentNodeLcb;
}

function buildTree(){
    const one = new TreeNode(0);
    const two = new TreeNode(1);
    const three = new TreeNode(2);

    const four = new TreeNode(1);
    const five = new TreeNode(2);

    const six = new TreeNode(1);
    const seven = new TreeNode(3);

    one.left = two;
    one.right = three;

    two.left = four;
    two.right = five;

    three.left = six;
    three.right = seven;

    const eight = new TreeNode(2);
    const nine = new TreeNode(3);
    const ten = new TreeNode(4);
    const eleven = new TreeNode(5);

    six.right = eight;
    eight.left = nine;
    nine.left = ten;
    ten.right = eleven;

    return one;
}
function TreeNode(val) {
    this.left = null;
    this.right = null;
    this.val = val;
}