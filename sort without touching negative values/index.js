/**
 * Sort an array without changing position of negative numbers
 *  Input: arr[] = {2, -6, -3, 8, 4, 1}
    Output: 1 -6 -3 2 4 8



    Input: arr[] = {-2, -6, -3, -8, 4, 1}
    Output: -2 -6 -3 -8 1 4
 */

const quickSort = require('../quick-sort');

sortPositive = (arr) => {
   let positiveValues = [];
   let negativeIndices = {};
   for(let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
         positiveValues.push(arr[i])
      } else {
         negativeIndices[i] = arr[i];
      }
   }
   let sortedPositiveValues = quickSort(positiveValues);
   let count = 0;
   for(let i = 0; i<arr.length; i++) {
      if (negativeIndices[i]) {
         arr[i] = negativeIndices[i];
      } else {
         arr[i] = sortedPositiveValues[count++];
      }
   }
   return arr;
}

let unsortedArray = [2, -6, -3, 8, 4, 1];
console.log(sortPositive(unsortedArray));

unsortedArray = [-2, -6, -3, -8, 4, 1];
console.log(sortPositive(unsortedArray));