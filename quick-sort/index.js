/**
 * Implement quick sort
 */

quickSort = (arr) => {
    if (!arr || arr.length == 0) return arr;
    let start = 0, end = arr.length;
    alignPivot(arr, start, end - 1);
    return arr;
}

alignPivot = (arr, start, end) => {
    if (start >= end) {
        return;
    }
    let pivotIndex = partition(arr, start, end);
    alignPivot(arr, start, pivotIndex - 1);
    alignPivot(arr, pivotIndex + 1, end);
}
partition = (arr, start, end) => {
    let pivot = arr[end];
    let pivotIndex = start;
    for (var i = start; i < end; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}
swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let a = [5, 100, 1, 50, 60, 40, 75, 30, 24, 66];
console.log(quickSort(a));

a = [];
console.log(quickSort(a));