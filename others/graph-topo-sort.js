/* 
Graph - Topo sort 

below does not have handle cyclic. for handling cyclic, maitian tempVisted and permVisited arrays. (see graph-dfs.js)
*/
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
    if(this.adjList.hasOwnProperty(v1)){
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

Graph.prototype.topo = function() {
    const stack = [];
    const visited = {};
    for( let v in this.vertices){
        visited[v] = false;
    }

    for( let v in this.vertices){
		if(!visited[v]) {
            this.topoUtil(v, visited, stack);
        }
    }

    while(stack.length > 0){
        console.log(stack.pop());
    }
}

Graph.prototype.topoUtil = function(vertex, visited, stack) {
    
    const adjVertices = this.adjList[vertex] || [];
    adjVertices.forEach( (adjVertex) => {
        if(!visited[adjVertex]) {
            this.topoUtil(adjVertex, visited, stack);
        }
    });
    
    stack.push(vertex);
    visited[vertex]=true;
}