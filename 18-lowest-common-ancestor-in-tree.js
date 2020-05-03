/* Q-18
Given   two   nodes   in   a   binary   tree,   write   a   function   to   find   the   lowest  
common ancestor. 
*/

function Tree(){
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

lca = function(node, a, b){
    const root = node;
    const map = {};
    this.isExits(root, a , b, map);
    console.log(map)
}


isExits = function(node, a, b, map){
    let x = false;
    let y = false;
    if(node == null){
        return [x, y]
    };
    
    const left = isExits(node.left, a, b, map)
    const right = isExits(node.right, a, b, map)

    x = (left[0] || right[0]) || (node.val == a);
    y = (left[1] || right[1]) || (node.val == b);
    map[node.val] = [x,y];
    return [x, y];
}

//----- another approach. get paths of both the nodes from root. compare both the paths and the place which they differ is the the answer.

function pathTo(fromNode, val){
    if(fromNode == null){
        return null;
    }
    if(fromNode.val === val){
        return [val];
    }
    const leftPath = pathTo(fromNode.left, val);
    const rightPath = pathTo(fromNode.right, val);

    if(leftPath != null){
        leftPath.push(fromNode.val);
        return leftPath;
    }
    if(rightPath != null){
        rightPath.push(fromNode.val);
        return rightPath;
    }
    return null;
}

function lca2(root, val1, val2) {
    const path1 = pathTo(root, val1);
    const path2 = pathTo(root, val2);

    let lcaElem;
    while(path1.length > 0 && path2.length > 0){
        const el1 = path1.pop();
        const el2 = path2.pop();
        if(el1 == el2){
            lcaElem = el1;
        }else{
            break;
        }
    }
    return lcaElem;
}