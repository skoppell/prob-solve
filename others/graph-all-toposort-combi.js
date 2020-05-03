/* 
Graph - Print all combination of topo sort.
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
    g.addVertex("0");
    g.addVertex("1"); 
    g.addVertex("2"); 
    g.addVertex("3"); 
    g.addVertex("4"); 
    g.addVertex("5"); 

    g.addEdge("5", "2");
    g.addEdge("5", "0");
    g.addEdge("4", "0");
    g.addEdge("4", "1");
    g.addEdge("2", "3");
    g.addEdge("3", "1");

    return g;
}

Graph.prototype.allTopo = function() {
    
    const inRefs = {};
    for(let v in this.vertices){
        inRefs[v] = 0;
    }

    for(let v in this.adjList){
        const neighbours = this.adjList[v] || [];
        for(let neighbour of neighbours){
            inRefs[neighbour] = inRefs[neighbour]+1;
        }
    }

    const stack = [];
    const visited = {};
    this.allTopoUtil(visited, inRefs, stack);
}

Graph.prototype.allTopoUtil = function(visited, inRefs, stack) {
    
    let printFlag = true;

    for(let v in this.vertices){
        const vertexHasZeroInRefs = (inRefs[v] == 0);
        const vertexIsUnVisited = !visited.hasOwnProperty(v);
        
        if(vertexHasZeroInRefs && vertexIsUnVisited) {
            const neighbours = this.adjList[v] || [];
            for(let neighbour of neighbours){
                inRefs[neighbour] = inRefs[neighbour] -1;
            }
            visited[v] = true;
            stack.push(v);
            this.allTopoUtil(visited, inRefs, stack);

            delete visited[v];
            stack.pop();
            for(let neighbour of neighbours){
                inRefs[neighbour] = inRefs[neighbour] + 1;
            }

            printFlag = false;
        }
    }

    if(printFlag){
        console.log(stack);
    }
}