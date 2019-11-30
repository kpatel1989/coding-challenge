/**
 * Given an array of integers, return a new array such that each element at index i of the
 * new array is the product of all the numbers in the original array except the one at i.
 */

getProductComplement = (arr) => {
    if (!arr || arr.length === 0) return null;
    let total = 1;
    for (var i = 0; i < arr.length; i++) {
        total = total * arr[i];
    }
    let productArr = []
    for (var i = 0; i < arr.length; i++) {
        productArr.push(total / arr[i]);
    }
    return productArr;
}

const a = [1, 2, 3, 4, 5];
console.log(getProductComplement(a));

const a2 = [3434,45,4,56];
console.log(getProductComplement(a2));

const b = null;
console.log(getProductComplement(b));

const c = undefined;
console.log(getProductComplement(c));