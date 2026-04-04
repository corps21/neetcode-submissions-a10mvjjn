class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Map = new Array(26).fill(0)
        const s2Map = new Array(26).fill(0)
        let left = 0, right = 0;

        for (let i = 0; i < s1.length; i++) {
            s1Map[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        }

        while (right < s2.length) {
            s2Map[s2[right].charCodeAt(0) - 'a'.charCodeAt(0)]++
            if (right - left + 1 === s1.length) {
                if (this.compareArr(s1Map, s2Map)) return true;
                s2Map[s2[left].charCodeAt(0) - 'a'.charCodeAt(0)]--
                left++
            }
            right++
        }

        return false;
    }

    compareArr(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }

        return true;
    }
}
