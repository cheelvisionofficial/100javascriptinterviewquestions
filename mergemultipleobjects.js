// Shallow Merge

// function merge(...arguments) {
//     let target = {};

//     function merger(obj) {
//         for (let prop in obj) {
//             if (obj.hasOwnProperty(prop)) {
//                 target[prop] = obj[prop];
//             }
//         }
//     }

//     for (let i = 0; i < arguments.length; i++) {
//         merger(arguments[i]);
//     }

//     return target;
// }

const obj1 = {
    name: 'Mr. CHEEL VISION',
    age: 20,
    shallow: {
        name: 'dk',
        age: '123',
        dk: {
            cd: {
                d: 1
            }
        }
    }
}

const obj2 = {
    qualification: 'PHD',
    likes: 'Javascript',
    shallow: {
        name: 'CheelBhaiya'
    }
}


// let merged = merge(obj1, obj2);
// console.log(merged);



function deepMerge(...arguments) {
    let target = {};

    function merger(obj) {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    target[prop] = deepMerge(target[prop], obj[prop]);
                }
                else {
                    target[prop] = obj[prop];
                }
            }
        }
    }

    for (let i = 0; i < arguments.length; i++) {
        merger(arguments[i]);
    }

    return target;
}

const result = deepMerge(obj1, obj2);
console.log(result);

