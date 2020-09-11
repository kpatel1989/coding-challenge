/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let power = 1;
    while(power > 0 && power <= n) {
        if   (power == n) {
            return true;
        }
        power = power << 1;
    }
    return false;
};

let testCases = [
    1073741825,
    256,
    1,
    0,
    111
]

testCases.map(testCase => console.log(isPowerOfTwo(testCase)));