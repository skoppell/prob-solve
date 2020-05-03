/* 
Graph - DFS 
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

Graph.prototype.dfs = function() {
    const visited = {};
    const temp = {};
    for( let v in this.vertices){
        visited[v] = false;
    }

    const keys = Object.keys(this.vertices);
    for(let i=0;i<keys.length;i++){
        const v = keys[i];
		if(!visited[v]) {
            const doNotHvCycles = this.dfsUtil(v, visited, temp);
            if(!doNotHvCycles){
                break;
            }
        }
    }
}

Graph.prototype.dfsUtil = function(vertex, visited, temp) {
    
    if(temp.hasOwnProperty(vertex)){
        console.log("Cyclic !");
        return false;
    }else {
        console.log(vertex);
        temp[vertex] = true;
        const adjVertices = this.adjList[vertex] || [];
        for(let i=0;i<adjVertices.length;i++){
            const adjVertex = adjVertices[i];
            if(!visited[adjVertex]) {
                const doNotHvCycles = this.dfsUtil(adjVertex, visited,temp);
                if(!doNotHvCycles){
                    return false;
                }
            }
        }
        delete temp[vertex];
        visited[vertex]=true;
    }
}