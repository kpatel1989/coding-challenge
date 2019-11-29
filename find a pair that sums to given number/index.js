/**
 * Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

    For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 */

findPair = (arr, value) => {
    const length = arr.length;
    for (var i = 0 ; i < length; i++ ) {
        for (var j = i; j < length; j++) {
            if (arr[i] + arr[j] === value){
                return [arr[i], arr[j]];
            }
        }
    }
    return [];
}

const arr = [8, 15, 10, 2];
const value = 17;

console.log(findPair(arr, value));