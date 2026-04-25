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
            const [course1, course2] = prerequisites[i]
            indegree[course2]++
            adjList[course1].push(course2)
        }

        // first all the courses that don't have prerequisites
        const q = [] 

        // course mapping to its prerequisites
        const mapping = Array.from({length: numCourses}, () => new Set())

        for(let i = 0; i < indegree.length; i++) {
            if(indegree[i] === 0) q.push(i)
        }

        while(q.length > 0) {
            // super course
            const node = q.shift()

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
            const [u, v] = queries[i]

            result[i] = mapping[v].has(u)  
        }

        return result
    }
}
