// --- GRAPH DS --------------------------------------------------------------------------------
function Node(val) {
    this.val = val;
}

function Graph() {
    this.vertices= {};
    this.adjList = {};
}

Graph.prototype.addVertex = function(val) {
    const node = new Node(val);
    this.vertices[val] = node;
}

Graph.prototype.addEdge = function(v1, v2) {
    if(this.adj.hasOwnwProperty(v1)){
        this.adjList[v1].push(v2);
    }else{
        this.adjList[v1] = [ v2 ];
    }
}

function buildGraph(){
    const g = new Graph();
    g.addVertex("a"); 
    g.addVertex("b"); 
    g.addVertex("c"); 
    g.addVertex("d"); 
    g.addVertex("e"); 
    g.addVertex("f"); 

    g.addEdge("f", "a");
    g.addEdge("e", "a");
    g.addEdge("e", "b");
    g.addEdge("f", "c");
    g.addEdge("c", "d");
    g.addEdge("d", "b");

    return g;
}
// -----------------------------------------------------------------------------------------------

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