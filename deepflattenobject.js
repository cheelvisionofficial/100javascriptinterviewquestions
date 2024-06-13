const mainObj = {
    A: "12",
    B: "23",
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1, 2]
    },
    D: [1, 2, 3]
}
// {0:1,1:2,2:3} {D.0:1,D.1:2,D.2:3}
const flatten = (obj, prefix) => {
    let output = {};

    // iterate the object
    for (let k in obj) {
        let val = obj[k];
        const newKey = prefix ? prefix + "." + k : k;
        if (typeof val === "object") {
            // Check if it is a array
            if (Array.isArray(val)) {
                const { ...arrToObj } = val;
                const newObj = flatten(arrToObj, newKey);
                output = { ...output, ...newObj };
            } else {
                const newObj = flatten(val, newKey);
                output = { ...output, ...newObj };
            }
        }
        else {
            output = { ...output, [newKey]: val };
        }
    }
    return output;
}

// {
//     'A':'12',
//     'B':'23'
// }

flatten(mainObj);

// output
// const result = {
//     'A': "12",
//     'B': "23",
//     'C.O.L': 56,
//     'C.P': 23,
//     'C.Q.0': 1,
//     'C.Q.1': 2
// }
