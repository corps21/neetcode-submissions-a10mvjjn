class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = []

        for (let i = 0; i < asteroids.length; i++) {
            if(asteroids[i] > 0 || !stack.length) stack.push(asteroids[i])
            else {
                let top = stack[stack.length - 1]
                let dPush = false


                while(top > 0 && top + asteroids[i] <= 0) {
                    stack.pop();
                    if(top + asteroids[i] === 0) {
                        dPush = true
                        break;
                    }
                    if(stack.length) top = stack[stack.length-1]
                    else break
                }
                if(top + asteroids[i] > 0) dPush = true

                if(!dPush) stack.push(asteroids[i])
            } 
        }

        return stack
    }
}
