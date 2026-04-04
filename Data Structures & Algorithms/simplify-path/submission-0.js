class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const tokens = this.split(path, "/");
        const stack = [];

        for(let i=0;i<tokens.length;i++) {
            switch(tokens[i]) {
                case "" : 
                case ".":
                break
                case "..":
                stack.pop();
                break
                default: stack.push(tokens[i])
                break
            }
        }

        if(stack.length === 0) return "/"

        let res = ""
        for(let i = 0;i<stack.length;i++) {
            res += "/" + stack[i];
        }

        return res;
    }

    split(string, delimiter) {
        const tokens = []

        let temp = ""
        for(let i = 0;i<string.length;i++) {
            if(string[i] === delimiter) {
                tokens.push(temp)
                temp = ""
            } else {
                temp += string[i]
            }
        }

        if(temp.length !== 0) {
            tokens.push(temp);
        }

        return tokens
    }
}
