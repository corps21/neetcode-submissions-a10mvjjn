class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adjList = new Map()

        for(let i = 0; i < edges.length; i++) {
            const [n1, n2] = edges[i]

            if(adjList.has(n1)) {
                adjList.get(n1).push(n2)
            } else {
                adjList.set(n1,[n2])
            }

            if(adjList.has(n2)) {
                adjList.get(n2).push(n1)
            } else {
                adjList.set(n2,[n1])
            }
        }

        let componentCount = 0;
        const visited = new Array(n).fill(false)

        function bfs(node) {
            const q = [node]
            visited[node] = true

            while(q.length > 0) {
                const node = q.shift()

                const children = adjList.get(node) || []

                for(let child of children) {
                    if(!visited[child]) {
                        visited[child] = true
                        q.push(child)
                    }
                }
            }
        }

        for(let i = 0; i<n; i++) {
            if(!visited[i]) {
                componentCount++
                bfs(i)
            }
        }

        return componentCount
    }
}
