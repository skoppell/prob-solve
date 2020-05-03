/*
Post-Order traversal for tree
*/

function Node(val, left, right){
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
}

function postOrderRecMain(root){
    let res1=[];
    postOrderRec(root);
    function postOrderRec(node){
        if(node == null){
            return;
        }
        if(node.left == null && node.right == null){
            res1.push(node.val);
            return;
        }
        postOrderRec(node.left);
        postOrderRec(node.right);
        res1.push(node.val);
    }
    return res1;
}

function postOrderIter1(node){
    let res2 = [];
    let _stack = [];
    
    _stack.push(node);
    while(_stack.length != 0){
        const topofStack = _stack.pop();
        if(topofStack.left){
            _stack.push(topofStack.left);
        }
        if(topofStack.right){
            _stack.push(topofStack.right);
        }
        res2.push(topofStack.val);
    }
    return res2.reverse();
}
