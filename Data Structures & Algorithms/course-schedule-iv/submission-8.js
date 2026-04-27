class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const indegree = new Array(numCourses).fill(0)
        const adjList = Array.from({length: numCourses}, () => [])

        for(let i = 0; i < prerequisites.length; i++) {
            const [u,v] = prerequisites[i]
            indegree[v]++
            adjList[u].push(v);
        }

        const q = []

        for(let i = 0; i < indegree.length; i++) {
            if(indegree[i] === 0) q.push(i)
        }

        const mapping = Array.from({length: numCourses}, () => new Set())

        while(q.length > 0) {
            const node = q.shift();
            const children = adjList[node]

            for(const child of children) {
                indegree[child]--
                if(indegree[child] === 0) q.push(child)

                for(const pre of mapping[node]) {
                    mapping[child].add(pre)
                }

                mapping[child].add(node)
            }
        }

        const result = []

        for(let i = 0; i < queries.length; i++) {
            const [u,v] = queries[i]

            result[i] = mapping[v].has(u)
        }

        return result
    }
}
