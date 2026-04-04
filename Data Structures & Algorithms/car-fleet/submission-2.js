class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const map = new Map();

        for(let i =0;i <position.length;i++) {
            map.set(position[i], speed[i])
        }

        position.sort((a,b) => a-b)
        const stack = []

        for(let i = position.length - 1; i >= 0 ;i--) {
            if(stack.length === 0) {
                const time = (target - position[i]) / map.get(position[i]) 
                stack.push(time)
            } else {
                let currentTime = (target - position[i]) / map.get(position[i])
                if(stack[stack.length - 1] < currentTime) {
                    stack.push(currentTime)
                }
            }
        }

        return stack.length;

    }
}
