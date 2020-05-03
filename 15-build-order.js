/*
Q-15

Given a list of packages that need to be built and the dependencies for 
each package, determine a valid order in which to build the packages. 

0: 
1: [0] 
2: [0]
3: [1, 2] 
4: [3] 
output: [0, 1, 2, 3, 4]

*/

function buildOrder(inputMap){
    const g = new Graph();
    const vertices = Object.keys(inputMap);

    vertices.forEach( (vertex) => {
        g.addVertex(vertex);
    });

    for(let vertex in inputMap){
        const adjs = inputMap[vertex];
        adjs.forEach( (adjVert) => {
            g.addEdge(vertex, adjVert);
        })
    }

    const topoOrder = g.topo();
    if(topoOrder){
        topoOrder.forEach( (elem) => {
            console.log(elem);
        });
    }
}

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

Graph.prototype.topo = function() {
    const stack = [];
    const visited = {};
    const temp = {};
    for( let v in this.vertices){
        visited[v] = false;
    }

    let cyclic = false;
    const keys = Object.keys(this.vertices);
    for( let i= 0; i<keys.length; i++){
        const v = keys[i];
		if(!visited[v]) {
            const canContinue = this.topoUtil(v, visited, stack, temp);
            if(!canContinue){
                cyclic = true;
                break;
            }
        }
    }

    return cyclic ? undefined : stack;
}

Graph.prototype.topoUtil = function(vertex, visited, stack, temp) {
    if(temp.hasOwnProperty(vertex)){
        console.log("Cyclic !!");
        return false;
    }else {
        temp[vertex] = true;
        const adjVertices = this.adjList[vertex] || [];
        let cyclic = false;
        for(let i=0;i<adjVertices.length;i++){
            const adjVertex = adjVertices[i];
            if(!visited[adjVertex]) {
                const canContinue = this.topoUtil(adjVertex, visited, stack, temp);
                if(!canContinue){
                    cyclic = true;
                    break;
                }
            }
        }

        if(cyclic){
            return false;
        }else{
            visited[vertex]=true;
            delete temp[vertex]; 
            stack.push(vertex);
            return true;
        }
    }
}
/* 
 recursive way 
function buildOrder(inputMap){
    const order = [];
    const cache = {};
    for(let proj in inputMap){
        cache[proj] = false;
    }

    for(let proj in inputMap){
        build(proj, inputMap, cache, order);
    }
    return order;

    function build(proj, inputMap, cache, order){
        const depProjs = cache[proj];
        if(depProjs.length == 0){
            cache[proj] = true;
            order.push(proj);
        }else {
            
            let allDepsBuilt = true;
            const unBuiltDeps = []
            for(let i=0;i<depProjs.length;i++){
                if(cache[depProjs[i]] === true ){
                    continue;
                }else{
                    allDepsBuilt = false;
                    unBuiltDeps.push(depProjs[i]);
                }
            }

            if(!allDepsBuilt){
                unBuiltDeps.forEach( (proj) => {
                    build(proj, inputMap, cache, order);
                });
            }
            cache[proj] = true;
            order.push(proj);
        }
    }
} */