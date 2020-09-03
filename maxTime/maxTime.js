
/**
 *
 * Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.



Example 1:

Input: [1,2,3,4]
Output: "23:41"
Example 2:

Input: [5,5,5,5]
Output: ""

 */
const largestTimeFromDigits = function(A) {
    const size = A.length;
    A = A.sort((a,b)=> b-a);
    let hourTens = A.includes(2) ? 2
                    : A.includes(1) ? 1
                    : A.includes(0) ? 0
                    : -1;
    if (hourTens == -1) {
        return '';
    }

    let isValidTime = false;
    let currentHourTens = 2;
    let time = '';
    while(!isValidTime) {
        let digits = A.slice();
        if (digits.includes(currentHourTens)) {
            digits.splice(digits.indexOf(currentHourTens), 1);
            time = getTime(digits, currentHourTens);
        }
        if (time != '') {
            isValidTime = true;
        } else {
            currentHourTens--;
        }
        if (currentHourTens == -1) {
            break;
        }
    }
    return time;
};

const getTime = (A, hourTens) => {
    let hourOnces = -1;
    if (hourTens == 2) {
        hourOnces = A.includes(3) ? 3
                    : A.includes(2) ? 2
                    : A.includes(1) ? 1
                    : A.includes(0) ? 0 : -1;
        if (hourOnces == -1) {
            return '';
        }
    } else if (hourTens == '1' || hourTens == '0') {
        hourOnces = A[0];
    } else {
        return '';
    }
    A.splice(A.indexOf(hourOnces),1);

    let minTens = -1;
    if (A[0] > 5) {
        minTens = A[1];
    } else {
        minTens = A[0];
    }
    if(minTens >= 6) {
        return '';
    }
    A.splice(A.indexOf(minTens),1);
    let minOnes = A[0];
    return `${hourTens}${hourOnces}:${minTens}${minOnes}`;
}
const cases = [
    [2,0,6,6]
];

console.log(largestTimeFromDigits([2,0,6,6]));