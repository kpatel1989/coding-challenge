/**
 * Implement an autocomplete system.
 * That is, given a query string s and a set of all possible query strings,
 * return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
 */


 const queryStrings = ["dog", "deer", "deal", 'apple', 'ape'];
 let preProcessedMap = {};
    queryStrings.forEach(qs => {
        for(let i = 0; i < qs.length; i++) {
            let substr = qs.substr(0,i+1);
            preProcessedMap[substr] = preProcessedMap[substr] || [];
            preProcessedMap[substr].push(qs);
        }
    })
function autoComplete(searchString) {
    return preProcessedMap[searchString];
}

console.log(autoComplete('de'));
console.log(autoComplete('d'));
console.log(autoComplete('do'));
console.log(autoComplete('dog'));
console.log(autoComplete('a'));