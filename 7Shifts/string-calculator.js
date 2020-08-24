/**
 * String Calculator
1. Create a simple String calculator with a method: int Add(string numbers)
a. The numbers in the string are separated by a comma.
b. Empty strings should return 0.
c. The return type should be an integer.
d. Example input: “1,2,5” - expected result: “8”.
e. Write tests to prove your input validates.
2. Change the Add method to handle new lines in the input format
a. Example: “1\n,2,3” - Result: “6”
b. Example 2: “1,\n2,4” - Result: “7”
3. 3. Support a custom delimiter
a. The beginning of your string will now contain a small control code that lets you
set a custom delimiter.
b. Format: “//[delimiter]\n[delimiter separated numbers]”
c. Example: “//;\n1;3;4” - Result: 8
d. In the above you can see that following the double forward slash we set a
semicolon, followed by a new line. We then use that delimiter to split our
numbers.
e. e. Other examples
i. “//$\n1$2$3” - Result: 6
ii. “//@\n2@3@8” - Result: 13

4. Calling add with a negative number should throw an exception: “Negatives not allowed”.
The exception should list the number(s) that caused the exception
Bonus

1. Numbers larger than 1000 should be ignored.
a. Example “2,1001” - Result: 2
2. Delimiters can be arbitrary length
a. “//***\n1***2***3” - Result 6
3. Allow for multiple delimiters
a. “//$,@\n1$2@3” - Result 6
4. Combine 2 and 3 bonus questions. Allow multiple delimiters of arbitrary length
 */
const regExSymbols = ['|', '$', '^', '+', '?', '*', '{', '}', '[', ']', '(', ')'];
function add(stringNumber) {
    if (!stringNumber) return 0;
    // Set delimiter
    let delimiter = ',';

    // Set custom delimiter
    if (stringNumber.startsWith('//')) {
        let firstNewLine = stringNumber.indexOf('\n');
        delimiter = stringNumber.substring(2,firstNewLine);
        stringNumber = stringNumber.substring(firstNewLine);

        // If there are multiple delimiters
        if (delimiter.indexOf(',') >= 0) {
            let multipleDelimeters = delimiter.split(',')
                .map(currentDelimiter => {
                    return regExSymbols.includes(currentDelimiter) ? `\\${currentDelimiter}` : currentDelimiter;
                }).join('|');
            //Set delimiter t0 default
            delimiter = ',';

            // Replacing all other delimeters with default delimiter
            let multpleDelimiterRegEx = new RegExp(multipleDelimeters, 'g');
            stringNumber = stringNumber.replace(multpleDelimiterRegEx, delimiter);
        }
    }
    // Exclude new line characters
    stringNumber = stringNumber.replace(/\n/g,'');

    // split numbers
    let splitNumbers = stringNumber.split(delimiter);

    // Add numbers
    return splitNumbers.reduce((total, splitNumber) => {
        let parsedNumber = parseInt(splitNumber)
        if (Number.isInteger(parsedNumber)) {
            // Throw an error if the number is negative.
            if (parsedNumber < 0) {
                throw new Error("Negatives not allowed");
            } else if (parsedNumber > 1000) {
                // no-op
            } else {
                total += parsedNumber;
            }
        }
        return total;
    }, 0);
}

const testCases = [
    '1,2,3,4,5',
    '1,2,3,,5,,',
    '0',
    '',
    null,
    undefined,
    '1\n,2,3',
    '1\n,2,\n\n5\n\n',
    '\n\n\n',
    '//;\n1;3;4',
    '//;\n1;3;;\n',
    '//;\n1;3;;4;5\n',
    '//$\n1$3$4$$5$-1$\n',
    '//$\n1$3$4$$5$0$\n',
    '1,2,3,,5,,-3,',
    '//-\n1-2-3-5-3,',
    '2,1001',
    '2,1000,234,456',
    '//***\n1***2***3',
    '//***\n1***2**3',
    '//$,@\n1$2@3',
    '//$,@,^,?\n1ab2@abab5ab@5|454$23^456?asd',
    '//$,@,^,|,{,},(,)\n1ab2@abab5ab@5|454$23^456?23}{234(3245})234',
    '//$$,@,^,|,{,},(,)\n1ab2@abab5ab@5|454$23^456?23}{234(3245})-234',
    '//$$,@,^,|,{,},(,)\n1ab2@abab5ab@5|454$23^456?23}{234(3245})234'
];
console.table(testCases.map(testCase => {
    let result = '';
    try {
        result = add(testCase);
    } catch (e) {
        result = e.message;
    } finally {
        return {
            'case': testCase,
            'answer': result
        };
    }
}));