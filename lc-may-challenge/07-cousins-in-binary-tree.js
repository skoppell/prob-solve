/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

 

Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
 

Note:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.
 
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    
    if(root == null) return false;
    if(root.left == null || root.right == null) return false;
    if((root.left.left == null && root.left.right == null) && (root.right.left == null && root.right.right == null)) return false;
    
    const list = [];
    if(root.left.left)  list.push([root.left, root.left.left]);
    if(root.left.right) list.push([root.left, root.left.right]);
    if(root.right.left) list.push([root.right, root.right.left]);
    if(root.right.right)  list.push([root.right, root.right.right]);
    
    return checkNodes(list, x, y);

    // list = [[parent,child1], [parent,child2]]
    
    function checkNodes(list, x, y){
        let sibling1, sibling2, parent1, parent2;
                
        if(list.length == 0){
            return false;
        }
        
        const nextList = [];
        list.forEach( entry => {
            const parent = entry[0];
            const child = entry[1];
            if(child.left)
                nextList.push([child, child.left]);
            if(child.right)
                nextList.push([child, child.right]);
            if(child.val == x || child.val == y){
                if(!sibling1){
                    sibling1 = child;
                    parent1 = parent;
                }else{
                    sibling2 = child;
                    parent2 = parent;
                }
            }
        });
        if(sibling1 && sibling2){
            if(parent1 === parent2){
                return false;
            }else {
                return true;
            }
        }else if((sibling1 && !sibling2) || (!sibling1 && sibling2) ) {
            return false;
        }
        return checkNodes(nextList, x, y);
    }
    
};