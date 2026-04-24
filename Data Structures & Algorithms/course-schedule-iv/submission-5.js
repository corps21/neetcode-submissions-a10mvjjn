class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const indegree = new Array(numCourses).fill(0)
        const adjList = Array.from({length: numCourses}, () => new Array())

        for(let i = 0; i < prerequisites.length; i++) {
            const [course1, course2] = prerequisites[i]
            indegree[course2]++
            adjList[course1].push(course2)
        }

        const queue = []

        for(let i = 0; i < indegree.length; i++) {
            if(indegree[i] === 0) {
                queue.push(i)
            }
        }

        const mapping = Array.from({length: numCourses}, () => new Set())

        while(queue.length > 0) {
            const node = queue.shift()
            const children = adjList[node]

            for(const child of children) {
               indegree[child]--
               if(indegree[child] === 0) {
                queue.push(child)
               }

               for(const prereq of mapping[node]) {
                mapping[child].add(prereq)
               }

               mapping[child].add(node)
            }
        }

        const result = []

        for(let i = 0; i < queries.length; i++) {
            const [course1, course2] = queries[i]
            result[i] = mapping[course2].has(course1)
        }

        return result
    }
}
