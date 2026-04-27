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
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const dsu = new DSU(edges.length)

        for(let i = 0; i < edges.length; i++) {
            const [u,v] = edges[i];
            if(dsu.find(u) === dsu.find(v)) return [u,v]
            else {
                dsu.union(u,v)
            }
        }
    }
}
