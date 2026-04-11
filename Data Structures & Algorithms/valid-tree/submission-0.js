class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adjList = new Map();

        for(let i = 0; i < edges.length; i++) {
            const [node1, node2] = edges[i]

            if(adjList.has(node1)) {
                adjList.get(node1).push(node2)
            } else if(!adjList.has(node1)) {
                adjList.set(node1, [node2])
            }

            if(adjList.has(node2)) {
                adjList.get(node2).push(node1)
            } else if(!adjList.has(node2)) {
                adjList.set(node2, [node1])
            }
        }

        // check for cycle in undirected graphs
        let count = 0;
        const q = [[0, -1]]
        const visited = new Array(n).fill(false)
        visited[0] = true
        while(q.length > 0) {
            const [node, parent] = q.shift();
            count++
            const children = adjList.get(node) || []

            for(const child of children) {
                if(visited[child] && child !== parent) {
                    return false
                } else if(child !== parent) {
                    visited[child] = true
                    q.push([child, node])
                }
            }
        }

        return count === n
    }
}
