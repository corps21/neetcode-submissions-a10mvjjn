// return the number of substrings within s that are palindromes.
//  - return count
//  - include all counts (includes duplicates also)
//  - substring ??
//     - example abda :- so ada is not a substring

// - evaluation from examples
//     - aaa
//     - will check the first letter and last letter of the string
//         - if fails
//         - reject the entire string
//         -if passes
//         - new subproblem with a smaller string
//         - make sure to add 1 after solving the smaller string
//         - the dp of smaller string gives us the number of substring possible

// - repeated work
// - brute force tc n * (2 ^ n)
// - overlapping problem ??
// - states ??? first letter and last letter of the substring, the current count
// - can the current count be removed ??
// - can replace the current count be computing it on the parent level
// - tc will be O(m * n), sc will be O(m*n)  

// - return count of substring possible from the given string s

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const dp = Array.from({length: s.length+1}, () => new Array(s.length+1).fill(-1))

        function rec(i,j) {
            
            // base case 
            if(i === j || (j - i === 1 && s[i] === s[j])) {
                return 1;
            }

            if(dp[i][j] !== -1) {
                return dp[i][j]
            }     

            // compute 
            if(s[i]===s[j]) {
               if(rec(i+1,j-1) === 1) {
                    dp[i][j] = 1;
                    return 1
               }
               return -1 
            } else {
                return -1;
            }
        }


        let totalCount = 0;
        for(let i = 0; i < s.length; i++) {
            for(let j = s.length - 1; j >= i; j--) {
                const ans = rec(i,j)
                if(ans !== -1) {
                    totalCount ++
                }
            }
        }

        return totalCount;
    }
}
