class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const map = new Map();
        const stack = [];

        for(let i = 0;i<position.length;i++) {
            map.set(position[i], speed[i])
        }

        position.sort((a,b) => a-b)

        for(let i = position.length - 1;i >= 0;i--) {
            const temp = [position[i], map.get(position[i])]
            if(stack.length === 0) {
                stack.push(temp)
            } else {
                const currTime = (target - temp[0]) / temp[1] 
                const topTime = (target - stack[stack.length - 1][0]) / stack[stack.length - 1][1]

                if(currTime > topTime) {
                    stack.push(temp)
                }
            }
        }

        return stack.length;

    }
}
