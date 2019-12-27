/**
 * Given an array of integers, find the first missing positive integer in linear time and constant space.
 * In other words, find the lowest positive integer that does not exist in the array.
 * The array can contain duplicates and negative numbers as well.
 *
 *  For example, the input [3, 4, -1, 1, 6, 12, 9] should give 2. The input [1, 2, 0] should give 3.
 */


function firstMissingPositiveNumber(arr) {
    let num = 1;
    let nextValues = {};
    arr.push(0);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            nextValues[arr[i]] = arr[i] + 1;
        }
    }
    const values = Object.values(nextValues);
    let remainingValues = [];
    for(let i = 0; i< values.length; i++) {
        if(!nextValues[values[i]]) {
            remainingValues.push(values[i]);
        }
    }
    // console.log(nextValues, values, remainingValues);
    if (remainingValues.length > 0) {
        num = remainingValues[0];
        for (let i = 0; i < remainingValues.length; i++) {
            num = parseInt(remainingValues[i]) < num ? parseInt(remainingValues[i]) : num;
        }
    }
    return num;
}

let arr = [3, 4, -1, 1, 6, 12, 9];
console.log(firstMissingPositiveNumber(arr));

arr = [1, 2, 0];
console.log(firstMissingPositiveNumber(arr));


arr = [2, 0, 4, 6, 8, 0, 2, 4, 10];
console.log(firstMissingPositiveNumber(arr));

arr = [2, 2, 3, 4, 5, 1, 0, -2];
console.log(firstMissingPositiveNumber(arr));