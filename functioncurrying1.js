// sum(1, 2, 3, 4);
// sum(1)(2, 3, 4);
// sum(1, 2)(3)(4);
// sum(1, 2, 3)(4);

function sum(...args) {
    const storage = [...args]; // [1,2]

    if (storage.length === 4) {
        return storage[0] + storage[1] + storage[2] + storage[3]
    }
    // [1,2,3,4]
    const innerFunc = (...argum) => {
        storage.push(...argum);
        if (storage.length === 4) {
            return storage[0] + storage[1] + storage[2] + storage[3]
        }
        return innerFunc;
    }
    return innerFunc;
}

const res = sum(1)(2)(3)(4);
console.log(res);