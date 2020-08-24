function retrieveMostFrequentlyUsedWords(literatureText, wordsToExclude)
{
    let literatureArray = literatureText.toLowerCase();
    literatureArray = literatureArray.replace(/[^a-zA-Z]/g, ' ');
    literatureArray = literatureArray.replace(/ +/g, ' ').trim().split(' ');

    wordsToExclude = wordsToExclude.join(' ').toLowerCase().split(' ');

    let frequencyMap = {}, maxFrequencyWords = [], maxFrequency = 0;
    literatureArray.forEach(text => {
        if (!wordsToExclude.includes(text)) {
            if (!frequencyMap[text]) {
                frequencyMap[text] = 0;
            }
            frequencyMap[text]++;
        }
    });
    Object.keys(frequencyMap).forEach(text => {
        if (frequencyMap[text] > maxFrequency) {
            maxFrequencyWords = [text];
            maxFrequency = frequencyMap[text];
        } else if (frequencyMap[text] === maxFrequency) {
            maxFrequencyWords.push(text);
        }
    });
    return maxFrequencyWords;
}

let a = "Rose is a flower red rose are flower";
let b = ["is", "are", "a"]
console.log(retrieveMostFrequentlyUsedWords(a,b));