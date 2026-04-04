class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = []
        for(let asteroid of asteroids) {
            if(asteroid > 0) {
                stack.push(asteroid)
            } else {
                let pushToStack = true;
                if(stack.length === 0) {
                    stack.push(asteroid)
                    continue;
                }

                while(stack[stack.length - 1] > 0) {
                    if(stack[stack.length - 1] > Math.abs(asteroid)) {
                        pushToStack = false;
                        break;
                    } else if(stack[stack.length - 1] === Math.abs(asteroid)) {
                        stack.pop();
                        pushToStack = false;
                        break;
                    } else {
                        stack.pop();
                        pushToStack = true;
                    }
                }

                if(pushToStack) {
                    stack.push(asteroid)
                }

            }
        }

        return stack;
    }
}
