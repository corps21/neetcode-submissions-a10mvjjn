class Node {
    constructor() {
        this.map = new Array(26)
        this.end = false
    }
}

class PrefixTree {
    constructor() {
        this.root = new Node()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let temp = this.root;

        for(let i = 0; i < word.length; i++) {
            let child = temp.map[word[i].charCodeAt(0) - 'a'.charCodeAt(0)]
            if(!child) {
                child = new Node()
                temp.map[word[i].charCodeAt(0) - 'a'.charCodeAt(0)] = child
            }
            
            temp = child
        }

        temp.end = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        
        let temp = this.root

        for(let i = 0; i < word.length; i++) {
            let child = temp.map[word[i].charCodeAt(0) - 'a'.charCodeAt(0)]
            if(!child) return false
            else temp = child
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
            let child = temp.map[prefix[i].charCodeAt(0) - 'a'.charCodeAt(0)]
            if(!child) return false
            else temp = child
        }

        return true
    }
}
