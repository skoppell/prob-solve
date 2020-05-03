/* Q-16
Given   a   directed   graph,   find   the   shortest   path   between   two   nodes   if  
one exists.
  1----->2 
  ^  |   |
  |  v   |
  |  3   |
  |  ^   |
  |  |   v
  4<---- 5   
shortestPath(2, 3) = 2 ‐> 5 ‐> 4 ‐> 3 

BFS is vertex based and DFS is Edges based. 

for shortest path .. BFS is deal. If DFS used and a path is found .. it does not guarantee that is the shortest. So we still hv to do DFS for other nodes and
find out the shortest of all the valid paths. 

     1
    /  \ 
    2   3
   /    /
  4    /
   \  /
     5

shortestPath(1,5)  => if DFS .. first we will get 1,2,4,5 .. .but actually 1,3,5 is the shortes path
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
    g.addVertex("1"); 
    g.addVertex("2"); 
    g.addVertex("3"); 
    g.addVertex("4"); 
    g.addVertex("5"); 

    g.addEdge("1", "2");
    g.addEdge("2", "3");
    g.addEdge("3", "4");
    g.addEdge("4", "5");
    g.addEdge("4", "1");
    g.addEdge("1", "5");

    return g;
}

Graph.prototype.shortPath = function(v1, v2) {

    const queue = new Queue();
    const visited = {};
    const bkMap = {};

    queue.enqueue(v1);
    bkMap[v1] = null;
    while(!queue.isEmpty()){
        const popElem = queue.dequeue();
        if(popElem == v2){
            break;
        }
        if(!visited.hasOwnProperty(popElem)){
            const neighbours = this.adjList[popElem] || [];
            for(let ne of neighbours){
                queue.enqueue(ne);
                bkMap[ne] = popElem;
            }
            visited[popElem] = true;
        }
    }

    if(bkMap.hasOwnProperty(v2)){
        const result = [];
        let curr = v2;
        while(curr != null){
            result.push(curr);
            curr = bkMap[curr];
        }
        console.log("Shortes Path is: " + result.reverse());
    }else{
        console.log("No Path!");
    }

}

function Queue(){
    this.array = [];
}
Queue.prototype.enqueue = function(val){
    this.array.push(val);
}
Queue.prototype.dequeue = function(){
    if(!this.isEmpty()) {
        return this.array.splice(0, 1)[0];
    }else{
        return undefined;
    }
}
Queue.prototype.isEmpty = function(){
    return this.array.length == 0;
}