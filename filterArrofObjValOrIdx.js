const filterObject = (arr, filter) => {
    if (typeof filter === "string") {
        for (const entry of arr) {
            for (const [key, val] of Object.entries(entry)) {
                if (val === filter) {
                    return entry;
                }
            }
        }
    }
    else if (filter in arr) {
        return arr[filter];
    } else {
        return undefined;
    }
}

const arr = [
    {
        name: 'cheel',
        age: '22'
    },
    {
        name: 'vision',
        age: '20'
    },
]

const res = filterObject(arr, 0);
console.log(res);