/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const map = new Map()

        function helper(node) {
            if(!node) return null
            if(map.has(node)) return map.get(node)

            const newNode = new Node(node.val)
            map.set(node, newNode)

            for(let i = 0; i < node.neighbors.length; i++) {
                const neigh = helper(node.neighbors[i])
                if(neigh) {
                    newNode.neighbors.push(neigh)
                }
            }

            return map.get(node);
        }

        return helper(node)
    }
}
