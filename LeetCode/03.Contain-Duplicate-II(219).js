/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let slidingWindow = new Map();

    for (let i = 0; i < nums.length; i++) {
        // 1. Use .has() to check if the number exists in the map
        if (slidingWindow.has(nums[i])) {
            return true;
        }
        // 2. Use .set(key, value). The value doesn't matter, so we use 'true'
        slidingWindow.set(nums[i], true);
        // 3. Maintain the window size k
        if (slidingWindow.size > k) {
            slidingWindow.delete(nums[i - k]);
        }
    }
    return false;
};