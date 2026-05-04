class DSU {
  constructor(size) {
    this.leaders = Array.from({length: size}, (_,i) => i);
    this.ranks = new Array(size).fill(0)
  }

  union(a,b) {
    const leader1 = this.find(a);
    const leader2 = this.find(b);

    if(leader1 === leader2) return;

    // union by rank
    const rank1 = this.ranks[leader1]
    const rank2 = this.ranks[leader2]

    if(rank1 > rank2) {
      this.leaders[leader2] = leader1;
    } else if(rank2 > rank1) {
      this.leaders[leader1] = leader2
    } else {
      this.leaders[leader2] = leader1;
      this.ranks[leader1]++
    }

  }

  find(a) {
    if(this.leaders[a] === a) return a;
    // path compression
    this.leaders[a] = this.find(this.leaders[a]);
    return this.leaders[a];
  }

}


class Solution {
    /**
     * @param {string[][]} equations
     * @param {number[]} values
     * @param {string[][]} queries
     * @return {number[]}
     */
    calcEquation(equations, values, queries) {
        const adjList = Array.from({length: equations.length * 2}, () => [])
        const weights = Array.from({length: equations.length * 2}, () => [])

        const idToFigure = new Map();
        const dsu = new DSU(equations.length * 2);

        let count = 0;
        
        for(let i = 0; i < equations.length; i++) {
            const [n1, n2] = equations[i]
            
            let id1 = idToFigure.get(n1)

            if(id1 === undefined) {
                id1 = count++
                idToFigure.set(n1, id1)
            }

            let id2 = idToFigure.get(n2)
            if(id2 === undefined) {
                id2 = count++
                idToFigure.set(n2, id2)
            }

            const value = values[i]

            adjList[id1].push(id2)
            weights[id1][id2] = 1 / value

            adjList[id2].push(id1)
            weights[id2][id1] = value

            dsu.union(id1, id2)
        }

        const result = []

        function bfs(src, dest) {
            const visited = new Array(equations.length*2).fill(false)
            const q = [[src, 1]]
            visited[src] = true

            while(q.length > 0) {
                const [node, target] = q.shift()
                if(node === dest) return target

                const children = adjList[node]
                for(const child of children) {
                    if(!visited[child]) {
                        visited[child] = true
                        q.push([child, target * weights[node][child]])
                    }
                }
            }
            
            return -1;
        }

        for(let i = 0; i < queries.length; i++) {
            const [n1, n2] = queries[i];
            const id1 = idToFigure.get(n1)
            const id2 = idToFigure.get(n2)

            if(id1 === undefined || id2 === undefined) {
                result[i] = -1
                continue
            }

            const leader1 = dsu.find(id1)
            const leader2 = dsu.find(id2)

            if(leader1 !== leader2) {
                result[i] = -1
                continue
            }

            result[i] = bfs(id2, id1)
        }

        return result
    }  
}
