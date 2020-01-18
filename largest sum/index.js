/**
 * Given a list of integers, write a function that returns the largest sum of non-adjacent numbers.
 * Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13,
since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
 */


function largestSum(numbers, start, end) {
    if (start > end || end < start || start === end) {
        return 0;
    }
    let highestNum = numbers[start];
    let highestNumIndex = start;
    for(let i = start; i < end; i++) {
        if (numbers[i] > highestNum) {
            highestNum = numbers[i];
            highestNumIndex = i;
        }
    }
    return highestNum + largestSum(numbers, start, highestNumIndex - 1) + largestSum(numbers, highestNumIndex + 2 , end);
}

function findLargestSum(numbers) {
    return largestSum(numbers, 0, numbers.length);
}

console.log(findLargestSum([2, 4, 6, 2, 5]));
console.log(findLargestSum([5,1,1,5]));
console.log(findLargestSum([10,9,9,9,5,3,6,9,6,7,5,1,1,5]));
