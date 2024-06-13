// Object seal method restrict to add new properties and also you cannot delete the existing properties
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 2
    }
}

function deepSeal(object) {
    let propNames = Object.getOwnPropertyNames(object);
    for (let name of propNames) {
        let value = object[name];
        object[name] = value && typeof value === 'object' ?
            deepSeal(value) : value;
    }
    return Object.seal(object);
}

const sealedObj = deepSeal(obj);

sealedObj.e = 10;
sealedObj.c.e = 20;
delete sealedObj.c.d;
console.log(sealedObj)

