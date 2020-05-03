/* 

Given a pre-order of BST .. print its post order

*/

function postorder(preorder){

    if(!preorder || preorder.length == 0){
        return [];
    }

    const result = []
    postorder(preorder, 0, preorder.length-1);
    return result;
    function postorder(preorder, start, end){

        if(start > end){
            return;
        }

        if(start == end){
            result.push(preorder[start]);
            return;
        }
        const root = preorder[start];
        let leftTreeEndIndex = start+1;
        while(preorder[leftTreeEndIndex] < root){
            leftTreeEndIndex++;
        }
        leftTreeEndIndex--;
        postorder(preorder, start+1, leftTreeEndIndex);
        postorder(preorder, leftTreeEndIndex+1, end);
        result.push(root);
    }

}