
function hourglassSum(arr) {
    let hrGlass = [[0,0],[0,1],[0,2],[1,1], [2,0], [2,1], [2,2]];
    let rows = arr.length, cols = arr[0].length;
    let maxRows = rows - 2, maxCols = cols - 2;
    let rowIndex = 0, colIndex, maxSum;
    for(let r = 0; r < maxRows; r++) {
        colIndex = 0;
        for(let c = 0; c < maxCols; c++) {
            let sum = 0;
            for(let j = 0; j < hrGlass.length; j++) {
                sum += arr[hrGlass[j][0] + rowIndex][hrGlass[j][1] + colIndex];
            }
            maxSum = maxSum != undefined ? Math.max(maxSum, sum) : sum;
            colIndex++;
        }
        rowIndex++;
    }
    return maxSum;
}

let a = [[-1, 1, -1, 0, 0, 0],
[0, -1, 0, 0, 0, 0],
[-1, -1, -1, 0, 0, 0],
[0, -9, 2, -4, -4, 0],
[-7, 0, 0, -2, 0, 0],
[0, 0, -1, -2, -4, 0]]


console.log(hourglassSum(a));