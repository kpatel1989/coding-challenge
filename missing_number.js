/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let elementsNotInList = [];
    for (let i = 0; i<nums.length; i++) {
        nums[Math.abs(nums[i])-1] = -Math.abs(nums[Math.abs(nums[i])-1]);
    }
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] > 0) {
            elementsNotInList.push(i+1);
        }
    }
    return elementsNotInList;
};


let testCases = [
    [4,3,2,7,8,2,3,1],
    [1,5,6,7],
    [5,6]
]

testCases.map(testCase => console.log(findDisappearedNumbers(testCase)));