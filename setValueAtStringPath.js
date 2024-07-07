const object = { 'a': [{ 'b': { 'c': 3 } }] };

// Case for string
// "a[0].b.c" => ['a','[','0',']','.','b','.','c'];

// Case for array
// ['x[0]', 'y', 'z'].toString().split('')
// 'x[0]yz' => ['x','[','0',']','y','z']

// Assume path is always correct...
function set(object, path, value) {
    if (Array.isArray(path)) {
        path = path.toString().split('');
    }
    else {
        path = path.split('');
    }
    let finalObj = { ...object };
    let current = finalObj;

    for (let i = 0; i < path.length; i++) {
        let key = path[i];
        if (i === path.length - 1) {
            current[key] = value;
            continue;
        }
        if (key !== '.' && key !== '[' && key !== ']' && key !== ',') {
            current = current[key];
        }
    }
    return finalObj;
}
// final = current = { 'a': [{ 'b': { 'c': 3 } }] };
// current = [{ 'b': { 'c': 3 } }];
// current = { 'b': { 'c': 3 } };
// current = { 'c': 3 } => {c: 4}

// [a,[,0,],.,b,.,c];

let res = set(object, ['a[0'], 14);
console.log(res['a']);

// 4
// set(object, ['x[0]', 'y', 'z'], 5);
// console.log(object.x[0].y.z);
// 5
