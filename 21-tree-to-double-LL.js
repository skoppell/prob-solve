/* Q-21

Given   a   tree,   write   a   function   to   convert   it   into   a   circular   doubly   linked  
list from left to right by only modifying the existing pointers. 
        4
    2       6

1     3   5    7 

 <= 1 <=> 2 <=> 3 <=> 4 <=> 5 => 6 <=> 7 =>
*/

/* dbl(1)
   dbl(2)
     1.right = 2
     start = 1
     3.left=2
     end=3
     return [1,3]
    dbl(6)
      5.right=6;
      start=5
      7.left=6;
      end=7
      return [5,7]
3.right=4;
4.right=5;
return [1,7];
 */



function dbl(root){
    debugger;
    let start;
    let end;
    const case1 = root.left != null && root.left.left == null;
    const case2 = root.right != null && root.right.right == null;
    if(case1){
        root.left.right = root;
        start = root.left;
    }

    if(case2){
        root.right.left = root;
        end = root.right;
    }

    if(case1 || case2){
        return [start, end];
    }

    const leftSide = dbl(root.left);
    const rightSide = dbl(root.right);
    leftSide[1].right = root;
    root.left = leftSide[1];
    root.right = rightSide[0];
    rightSide[0].left = root;

    console.log("Forward --------------------")
    let next = leftSide[0];
    while(next != null){
        console.log(next);
        next = next.right;
    }

    console.log();
    
    console.log("Forward --------------------")
    let prev = rightSide[1];
    while(prev != null){
        console.log(prev);
        prev = prev.left;
    }
}

function buildTree(){
    const one = new TreeNode(1);
    const two = new TreeNode(2);
    const three = new TreeNode(3);
    const four = new TreeNode(4);
    const five = new TreeNode(5);
    const six = new TreeNode(6);
    const seven = new TreeNode(7);

    one.left = two;
    one.right = three;

    two.left = four;
    two.right = five;

    three.left = six;
    three.right = seven;

    return one;
}
function TreeNode(val) {
    this.left = null;
    this.right = null;
    this.val = val;
}