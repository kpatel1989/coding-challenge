/*
 * Complete the 'funWithAnagrams' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY text as parameter.
 */

function funWithAnagrams(text) {
    // Write your code here
    let anagrams = text.reduce((anagrams, currentElement, index) => {
        if (index == 0) return [];
        if (anagrams.length == 0) return [{element: currentElement, sorted: currentElement.split('').sort().join('')}];
        let currentElementSorted = currentElement.split('').sort().join('');
        let anagramExist = false;
        for (let i = 0; i < anagrams.length; i++) {
            if (anagrams[i].sorted === currentElementSorted) {
                anagramExist = true;
                break;
            }
        }
        if (!anagramExist) {
            anagrams.push({
                element: currentElement,
                sorted: currentElementSorted
            });
        }
        return anagrams;
    }, []);
    return anagrams.map(ana => ana.element).sort();
}

let a = [4, "code","aaagmnrs","anagrams","doce"];
console.log(funWithAnagrams(a))
let b = [4, "poke", "pkoe", "okpe", "ekop"];
console.log(funWithAnagrams(b))