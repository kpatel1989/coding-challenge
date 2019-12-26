/**
 * Given a string of round, curly, and square open and closing brackets,
 * return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
 */

function balancedBrackets(braces) {
    let len = braces.length;
    let bracesStack = [];
    let top = -1;
    const closeBrace = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 0; i<len; i++) {
        let brace = braces.charAt(i);
        if (brace == '(' || brace == '{' || brace == '[') {
                bracesStack.push(brace);
                top++;
        } else if (brace == ')' || brace == '}' || brace == ']') {
            if(top >= 0 && bracesStack[top] == closeBrace[brace]) {
                bracesStack.pop();
                top--;
            } else {
                break;
            }
        }
    }
    return  !(bracesStack.length > 0);
}

let a = "([])[]({})";
console.log(balancedBrackets(a));

a = "((()";
console.log(balancedBrackets(a));

a = "([)]";
console.log(balancedBrackets(a));
