class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const arr = [];

        for(let i=0;i<operations.length;i++) {
            switch(operations[i]) {
                case "+": arr.push(arr[arr.length - 1] + arr[arr.length - 2])
                break
                case "C": arr.pop()
                break
                case "D": arr.push(arr[arr.length - 1] * 2)
                break
                default: arr.push(Number(operations[i]))
            }
        }

        let sum = 0;
        for(let i=0;i<arr.length;i++) {
            sum+= arr[i]
        }

        return sum;
    }
}
