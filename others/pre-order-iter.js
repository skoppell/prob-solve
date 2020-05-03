/*
Pre-Order traversal for tree
*/

function Node(val, left, right){
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
}

function preOrderRecMain(root){
    let res1=[];
    preOrderRec(root);
    function preOrderRec(node){
        if(node == null){
            return;
        }
        if(node.left == null && node.right == null){
            res1.push(node.val);
            return;
        }
        res1.push(node.val);
        preOrderRec(node.left);
        preOrderRec(node.right);
    }
    return res1;
}

function preOrderIter(node){
    let res2 = [];
    let _stack = [];

    _stack.push(node);
    while(_stack.length != 0){
        const topofStack = _stack.pop();
        if(topofStack.right){
            _stack.push(topofStack.right);
        }
        if(topofStack.left){
            _stack.push(topofStack.left);
        }
        res2.push(topofStack.val);
    }
    return res2;
}