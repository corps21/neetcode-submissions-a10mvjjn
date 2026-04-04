class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for(let i=0;i<s.length;i++) {
            switch(s[i]) {
                case "(":
                case "{":
                case "[":
                stack.push(s[i])
                break
                
                case ")":
                if(stack[stack.length - 1] !== "(") return false
                else stack.pop()
                break 

                case "}":
                if(stack[stack.length - 1] !== "{") return false
                else stack.pop()
                break

                case "]":
                if(stack[stack.length - 1] !== "[") return false
                else stack.pop()
                break
            }
        }
        if(stack.length !== 0) return false;

        return true;
    }
}
