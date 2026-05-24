// return the longest substring of s that is a palindrome.
// - substring ??
//     - no gaps ??
//     - abad, ab can be substring, but abd cant
//     - cant skip characters
//     - can contains digit and english letters


// - examples
//     - ababd
//     - how to check for panlindrome
//         - i  j
//         - abad
//         - fails 
//         - either aba will be my substring or
//         - bad will be substring
//         - what if the inner part fails ? will the substring be valid
//             - no

//         - if success
//         - decrease the pointer
//     - check out for fails in the inner portion
//     - am i skipping anything ??
//     - no skipping but, reducing the boundary of palindromic substring


// - repeated work ??
//     - check if i and j are same or not
//     -  if the are then move to new smaller sub problem
//     - if it fails
//     - reject the entire substring
//     - try for new combinations
//     - either increse i or j
//     - not both of them simultaneously unless they are equal
//     - covered in happy path

// - appraoche is recursion n * (2 ** n)
// - overlapping problems ??
// - states i,j,currentlen
// - n ** 3
// - optimize the states ?
// - currentLen removed ??
// - consequences ?
// - compute len in the parent level
// - optimized tc will be n ** 2

// - so after figureing out the longest substring length
// - i also have to print it ??
// - i will return the starting index of the susbstrin and use its lengh 
// - figure out the inteval of substring
// - return idx and length


// - print longest palindromic substring of s

class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const dp = new Map();
        function rec(i,j) {
            
            if(j < i) {
                return [-1, 0]
            }

            if( i === j) {
                return [i, 1]
            } else if( j - i === 1 && s[i] === s[j]) {
                return [i,2]
            }

            // cache
            const key = [i,j].join("$")
            
            if(dp.has(key)) {
                const ans = dp.get(key)
                return [i, ans]
            } 

            // compute
            if(s[i] === s[j]) {
                const [idx, ans] = rec(i+1, j-1)

                if(idx === -1) {
                    return [-1, 0]
                }

                dp.set(key, ans + 2)
                return [i, ans + 2]
            } else {
                return [-1, 0]
            }
        }

        let winnerIdx = -1
        let winnerLen = -Infinity

        for(let i = 0; i < s.length; i++) {
            for(let j = s.length - 1; j >= i;j--) {
                const [idx, ans] = rec(i,j)
                if(ans > winnerLen) {
                    winnerIdx = idx
                    winnerLen = ans
                }
            }
        }
        
        return s.slice(winnerIdx, winnerIdx + winnerLen)
    }
}
