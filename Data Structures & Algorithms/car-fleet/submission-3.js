class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = []
        const speedMap = new Map();

        for(let i = 0; i< position.length; i++) {
            speedMap.set(position[i], speed[i])
        }

        position.sort((a,b) => a-b)

        for(let i = position.length - 1; i >= 0; i--) {
            const time = (target - position[i]) / speedMap.get(position[i])
            if(!stack.length) stack.push(time)
            else {
                const topTime = stack[stack.length - 1]
                if(time > topTime) stack.push(time)
            } 
        }

        return stack.length
    }
}
