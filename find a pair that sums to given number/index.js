/**
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

    For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 */

findPair = (arr, value) => {
    let difference = {};
    const length = arr.length;
    for (var i = 0 ; i < length; i++ ) {
        if (difference[arr[i]]) {
            return [difference[arr[i]], arr[i]];
        }
        let diff = Math.abs(value - arr[i]);
        difference[diff] = arr[i];
    }
    return [];
}

const arr = [8, 15, 10, 2];
const value = 17;

console.log(findPair(arr, value));