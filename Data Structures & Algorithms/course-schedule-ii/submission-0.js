class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const indegree = new Array(numCourses).fill(0)
        const adjList = new Map();

        for(let i = 0; i < prerequisites.length; i++) {
            const [node1, node2] = prerequisites[i]
            indegree[node1]++
            if(adjList.has(node2)) {
                adjList.get(node2).push(node1)
            } else {
                adjList.set(node2, [node1])
            }
        }

        const q = []
        for(let i = 0; i < indegree.length;i++) {
            if(indegree[i] === 0) q.push(i)
        }
        let result = []

        while(q.length > 0) {
            const node = q.shift()
            result.push(node)

            const children = adjList.get(node) || []

            for(let i = 0; i < children.length; i++) {
                indegree[children[i]]--
                if(indegree[children[i]] === 0) q.push(children[i])
            }
        }

        return result.length === numCourses ? result : []
    }
}
