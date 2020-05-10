function printPaths(root, sum){

    const allPaths = [];
    
    solve(root, sum, []);

    function solve(root, sum, stack){

        if(root == null){
            return;
        }
        
        stack.push(root.val);
        if(root.val == sum){
            allPaths.push([...stack]);
        }
        solve(root.left, sum-root.val, [...stack]);
        solve(root.right, sum -root.val, [...stack]);
        stack.pop();
    }

    return allPaths;

}