class PrefixTree {
    constructor() {
        this.root = new PrefixNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let temp = this.root

        for(let i = 0; i < word.length; i++) {
            let node = temp.list[this.helper(word[i])]

            if(!node) {
                node = new PrefixNode()
                temp.list[this.helper(word[i])] = node 
            }

            temp = node
        }

        temp.end = true
    }

    helper(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let temp = this.root
        for(let i = 0; i < word.length; i++) {
            let node = temp.list[this.helper(word[i])]

            if(!node) return false
            temp = node
        }

        return temp.end
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let temp = this.root
        for(let i = 0; i < prefix.length; i++) {
            let node = temp.list[this.helper(prefix[i])]

            if(!node) return false
            temp = node
        }

        if(temp) return true
        else return false
    }
}

class PrefixNode {
    constructor() {
        this.list = new Array(26)
        this.end = false
    }
}
