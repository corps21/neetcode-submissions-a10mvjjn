class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = []

        for(let i = 0;i<asteroids.length;i++) {
            if(stack.length === 0 || asteroids[i] > 0) {
                stack.push(asteroids[i])
            } else {

                let pushToStack = true;

                while(stack[stack.length - 1] > 0) {
                    const diff = stack[stack.length - 1] + asteroids[i]

                    if(diff > 0) {
                        pushToStack = false;
                        break;
                    } else if(diff < 0) {
                        stack.pop();
                        pushToStack = true;
                    } else {
                        pushToStack = false;
                        stack.pop();
                        break;
                    }
                }

                if(pushToStack) {
                    stack.push(asteroids[i])
                }
            }
        }

        return stack
    }
}
