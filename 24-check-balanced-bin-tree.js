/* Q-24
Given   a   binary   tree,   write   a   function   to   determine   whether   the   tree   is  
balanced.

balanced tree =>  left and right branches' height difference is not greater than 1.
*/

function checkBalBinTree(node, heightMap){
    
    if(node == null){
        return true;
    }
    const leftBalanced = checkBalBinTree(node.left,heightMap);
    if(!leftBalanced){
        return false;
    }
    const rightBalanced = checkBalBinTree(node.right,heightMap);
    if(!rightBalanced){
        return false;
    }
    const leftHeight = height(node.left,heightMap);
    const rightHeight = height(node.right,heightMap);
    return Math.abs(leftHeight - rightHeight) <= 1;
}


function height(node, heightMap){
    if(!heightMap.get(node)){
        if(node == null){
            heightMap.set(node, 0);    
        }else {
            const leftH = height(node.left, heightMap);
            const rightH = height(node.right, heightMap);
            heightMap.set(node,Math.max( leftH, rightH) + 1);
        }
    }
    return heightMap.get(node);
}