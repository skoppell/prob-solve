/* Given in-order and pre-order .. .build the post order */


function postOrder(inorder, preorder){
	const result = [];
    const nodeCount = inorder.length;
    return solve(inorder, 0, preorder, 0, nodeCount);

    function solve(inorder, s1, preorder, s2, nodeCount){
        if(nodeCount == 0) 
            return;
        if(nodeCount == 1){
            result.push(inorder[s1]);
            return;
        }
        
        const root = preorder[s2];
        const rootIndexInOrder = inorder.indexOf(root);
        const leftTreeNodeCount = rootIndexInOrder - s1;
        solve(inorder, s1, preorder, s2+1, leftTreeNodeCount);
        solve(inorder, rootIndexInOrder+1, preorder, s2+leftTreeNodeCount+1, nodeCount-leftTreeNodeCount-1);
        result.push(root);
		return result;
    }
}