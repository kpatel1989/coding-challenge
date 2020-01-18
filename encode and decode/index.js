/**
 * Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
 */


const map = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
}
function decode(message) {
    let keys = Object.keys(map);
    let combinations = getCombination(message);
    let decodedMessages = [];
    combinations.forEach(c => {
        let decodedMessage = '';
        let encodedMessage = c.split(',');
        for(i = 0; i < encodedMessage.length; i++ ) {
            for(j = 0; j < keys.length; j++ ) {
                if (encodedMessage[i] === map[keys[j]].toString()) {
                    decodedMessage += keys[j];
                }
            }
        }
        decodedMessages.push(decodedMessage);
    });
    return [combinations, decodedMessages];
}


function getCombination(message) {
    const messageLen = message.length;
    if (messageLen <= 1) {
        return [message];
    }
    let firstChar = message.charAt(0);
    let combs = [];
    if (parseInt(firstChar) >= 1)
        combs = combs.concat(getCombination(message.substr(1)).map(c => firstChar + ',' + c));
    let doubleChar = message.substr(0,2);
    if (parseInt(doubleChar) >= 1 && parseInt(doubleChar) <= 26)
        combs = combs.concat(getCombination(message.substr(2)).map(c => doubleChar + ',' + c));
    return combs;
}

let message = '111'
console.log(decode(message));

message = '001'
console.log(decode(message));

message = '23166'
console.log(decode(message));