class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const numStack = []
        const strStack = []
        let tempNum = "";

        for(let i = 0; i<s.length;i++) {
            if(!isNaN(s[i])) {
                if(numStack.length && numStack[numStack.length - 1] === tempNum) {
                    numStack.pop()
                }

                tempNum += s[i]
                numStack.push(tempNum)

            } else {
                tempNum = ""

                if(s[i] !== "]") {
                    strStack.push(s[i])
                } else {
                    let temp = "";
                    while(strStack[strStack.length - 1] !== "[") {
                        temp = strStack.pop() + temp;
                    }
                    strStack.pop(); // removing [
                    strStack.push(temp.repeat(parseInt(numStack.pop())))
                }
            }
        }

        return strStack.join("")
    }
}
