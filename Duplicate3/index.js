/**
 * Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    const maxIteration = nums.length;
    if (maxIteration < 0 || nums.length < 2 || k == 0) return false;
    for (let i = 0; i < maxIteration; i++) {
        for (let j = i+1; j < i+k+1; j++) {
            console.log(i, j);
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
        }
    }
    return false;
};

let n = [
    [1,5,9,1,5,9],
    2,
    3
]
console.log(containsNearbyAlmostDuplicate(n[0], n[1], n[2]));

n = [
    [1,2,3,1],
    3,
    0
]
console.log(containsNearbyAlmostDuplicate(n[0], n[1], n[2]));

n = [
    [3,6,0,4],
    2,
    2
]
console.log(containsNearbyAlmostDuplicate(n[0], n[1], n[2]));