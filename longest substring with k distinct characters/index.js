/**
 * Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
 */


 function longestSubstring(str, maxUniqueChars) {
     let uniqueChars = {};
    let subs = '';
     let maxLength = 0, maxStart = 0; maxEnd = 0, start = 0, end = 0;
     for (let i = 0; i < str.length; i++) {
        uniqueChars[str[i]] = uniqueChars[str[i]] || 0;
        uniqueChars[str[i]]++;

     }
 }

 let a, d;
a = "abcba"; d = 2;
 console.log(longestSubstring(a, d))
a = "abcbccbd"; d = 2;
 console.log(longestSubstring(a, d))
a = "abcbdacaccdccabbc"; d = 3;
 console.log(longestSubstring(a, d))