class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = []
        let temp = ""
        let tempNum = ""
        let recompute = false
        for (let i = 0; i < s.length; i++) {

            if (s[i] === "]") {
                temp = stack.pop() + temp;
                recompute = true;
            } else {
                stack.push(s[i])
            }

            while (recompute) {
                let str = stack.pop();

                if (!isNaN(str)) { // if it is a number

                    tempNum = str + tempNum;
                    
                    if (stack.length === 0 || isNaN(stack[stack.length - 1]) ) {
                        stack.push(temp.repeat(Number(tempNum)))
                        recompute = false;
                        temp = ""
                        tempNum = "";
                        break;
                    }

                } else if (str !== "[") {
                    temp = str + temp
                }
            }

        }

        let ans = "";
        stack.forEach((str) => {
            ans = ans + str
        })

        return ans;

    }


}
