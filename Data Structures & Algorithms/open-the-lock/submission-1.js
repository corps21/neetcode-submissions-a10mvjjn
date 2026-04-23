class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        const forbidden = new Set(deadends);
        const visited = new Set();

        const q = [["0000", 0]];
        visited.add("0000")

        if(forbidden.has("0000")) return -1

        while (q.length > 0) {
            const [combination, count] = q.shift();
           
            if (combination === target) return count;

            for (let i = 0; i < 4; i++) {
                const letters = combination.split("");
                const newForwardLetter = String((+letters[i] + 1) % 10);
                const newBackwardLetter = String((+letters[i] - 1 + 10) % 10);

                letters[i] = newForwardLetter;
                const forwardCombination = letters.join("")

                if (!visited.has(forwardCombination) && !forbidden.has(forwardCombination)) {
                    visited.add(forwardCombination);
                    q.push([forwardCombination, count + 1]);
                }
                

                letters[i] = newBackwardLetter;
                const backwardCombination = letters.join("")
                
                if (!visited.has(backwardCombination) && !forbidden.has(backwardCombination)) {
                    visited.add(backwardCombination);
                    q.push([backwardCombination, count + 1]);
                }
                
            }
        }

        return -1
    }
}
