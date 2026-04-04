class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let temp = this.root
        for (let i = 0; i < word.length; i++) {
            let node = temp.map[word[i].charCodeAt(0) - 'a'.charCodeAt(0)]
            if (!node) {
                node = new TrieNode()
                temp.map[word[i].charCodeAt(0) - 'a'.charCodeAt(0)] = node
            }

            temp = node
        }
        temp.end = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let temp = this.root
        return this.helper(temp, word)
    }

    helper(start, word) {
        let temp = start

        for (let i = 0; i < word.length; i++) {
            if (word[i] !== ".") {
                let node = temp.map[word[i].charCodeAt(0) - 'a'.charCodeAt(0)]
                if (!node) {
                    return false
                }

                temp = node
            } else {

                for (let j = 0; j < 26; j++) {
                    let node = temp.map[j]
                    if(!node) continue
                    const res = this.helper(node, word.slice(i + 1))

                    if(res) return true
                }

                return false
            }
        }

        return temp.end
    }
}

class TrieNode {
    constructor() {
        this.map = new Array(26)
        this.end = false
    }
}
