// "3[b2[ca]]"
// countStack = []; 3 
// stringStack = []; 
// currentString = 'bcabca';
// currentNum = 0
// bcabcabcabcabcabca
let res = decodeString('3[b2[ca1[d]]]');
console.log(res);
function decodeString(s) {
    let countStack = [];
    let stringStack = [];
    let currentString = '';
    let currentNum = 0;
    for (let char of s) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        }
        else if (char === '[') {
            countStack.push(currentNum);
            stringStack.push(currentString);

            currentNum = 0;
            currentString = '';
        }
        else if (char === ']') {
            let repeatCount = countStack.pop();
            currentString = stringStack.pop() + currentString.repeat(repeatCount);
        } else {
            currentString += char;
        }
    }
    return currentString;
}
