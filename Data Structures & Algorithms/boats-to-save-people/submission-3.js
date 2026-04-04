class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b) => a-b)
        let start = 0;
        let end = people.length - 1
        let count = 0;

        while(start <= end ) {
            if(people[start] + people[end] <= limit) {
                count++
                start++
                end--
            } else {
                count++
                end--
            }
        }

        return count;
    }
}
