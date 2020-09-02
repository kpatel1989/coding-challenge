function getSpreadsheetNotation(n) {
    // Write your code here
     const numOfColumns = 702; // Given
    const startChar = 'A'; // Given
    let row = n <= 702 ? 1: Math.floor(n / (numOfColumns));
    let col = n % numOfColumns;
    let colName = '';
    if (col > 26) {
        let firstCharacter = Math.floor(col / 26);
        colName = String.fromCharCode(startChar.charCodeAt(0) - 1 + firstCharacter);
        let nextCharacter = col % 26;
        if (nextCharacter == 0) {
            colName += 'Z';
        } else {
            colName += String.fromCharCode(startChar.charCodeAt(0) - 1 + nextCharacter);
        }
    } else if (col == 0){
        colName = 'ZZ';
    } else {
        colName = String.fromCharCode(startChar.charCodeAt(0) - 1 + col);
    }

    return row + colName;
}

let n = [
    15,
    27,
    140443
];

n.forEach(a => {
    console.log('a',a, ':', getSpreadsheetNotation(a));
});