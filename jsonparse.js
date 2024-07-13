const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj);


// '"result"'
class MyJSON {
    static parse(string) {
        string = string.replace(/ /g, '');

        switch (string) {
            case '':
                throw new Error('Invalid');
            case 'null':
                return null;
            case '[]':
                return [];
            case '{}':
                return {};
            case 'true':
                return true;
            case 'false':
                return false;

            default:
                if (+string === +string) {
                    return +string;
                }
                else if (string[0] === '\'') {
                    throw new Error('Invalid');
                }
                else if (string[0] === '\"') {
                    // same as string.substr(1, string.length-2);
                    return string.slice(1, -1);
                }
                else {
                    const innerString = string.slice(1, -1);
                    const subStrings = this.stringSplitByComma(innerString);

                    if (string[0] === '[') {
                        return subStrings.map(item => this.parse(item));
                    }
                    else if (string[0] === '{') {
                        return subStrings.reduce((acc, item) => {
                            if (item.indexOf(':') > -1) {
                                const index = item.indexOf(':');
                                const thisKey = item.substring(0, index);
                                const thisValue = item.substring(index + 1);
                                acc[this.parse(thisKey)] = this.parse(thisValue);
                            }
                            return acc;
                        }, {});
                    }
                }
        }
    }

    static stringSplitByComma(string) {
        const allStrs = [];
        let lParen = 0;
        let lCurly = 0;
        let left = 0;
        let right = 0;

        while (right <= string.length) {
            const rChar = string[right];

            // [] {}
            if (rChar === '[') lParen++;
            if (rChar === ']') lParen--;
            if (rChar === '{') lCurly++;
            if (rChar === '}') lCurly--;

            if ((rChar === ',' && lParen === 0 && lCurly === 0) || right === string.length) {
                const thisStr = string.substring(left, right);
                allStrs.push(thisStr);
                left = right + 1;
            }
            right++;
        }
        return allStrs;
    }
}


const res = MyJSON.parse(json);
console.log(res);
// remove all the spaces...
// single quotes then throw error...
// [], {}, 'true', false, number as it is value return
// array ya object ya array of object
