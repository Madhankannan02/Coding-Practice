// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean}
 */

class Solution {
    isSubset(a, b) {
        const counts = {};

        for (const num of a) {
            counts[num] = (counts[num] || 0) + 1;
        }
        for (const num of b) {
            if (!counts[num] || counts[num] === 0) {
                return false;
            }
            counts[num]--;
        }
    
        return true;
    }
}