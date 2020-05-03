/* Iterative in-order traversal*/

function Node(val, left, right){
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
}

function inOrderRecMain(root){
    let res1=[];
    inOrderRec(root);
    function inOrderRec(node){
        if(node == null){
            return;
        }
        if(node.left == null && node.right == null){
            res1.push(node.val);
            return;
        }
    
        inOrderRec(node.left);
        res1.push(node.val);
        inOrderRec(node.right);
    }
    return res1;
}

function inOrderIter(node){
    let res2 = [];

    const _stack = [];
    
    let tempRoot = node;
    _stack.push(node);
    tempRoot = tempRoot.left;
    
    while(_stack.length != 0 || tempRoot != null){
        
        while(tempRoot != null){
            _stack.push(tempRoot);
            tempRoot = tempRoot.left;
        }

        const topOfStack = _stack.pop();
        res2.push(topOfStack.val);
        tempRoot = topOfStack.right;
    }
    return res2;
}