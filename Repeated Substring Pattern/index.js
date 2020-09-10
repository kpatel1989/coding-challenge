'use strict'
/**
 * Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
 * You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
 * Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
Example 2:

Input: "aba"
Output: False
Example 3:

Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let totalLength = s.length;
    let repeatCount = -1;
    let hasRepeatedSubstring = false;
    let multiples = [];
    for ( let i = 1; i < totalLength; i++) {
        if (totalLength % i == 0) {
            multiples.push(i);
        }
    }
    for (let i = 0; i < multiples.length; i++) {
        let substring = s.substr(0, multiples[i]);
        repeatCount = Math.ceil( totalLength / multiples[i]);
        let repeatingString = substring;
        for (let i = 0; i < repeatCount - 1; i++) {
            repeatingString += substring;
        }
        if (repeatingString == s) {
            hasRepeatedSubstring = true;
            break;
        }
    }
    return hasRepeatedSubstring;
};


let testCases = [
    "ababab",
    "babbabbabbabbab",
    "ababababab",
    "abab",
    "aba",
    "abcabcabcabc",
    "abac",
    'bb',
    'a'
]

testCases.map(testCase => console.log(repeatedSubstringPattern(testCase)));