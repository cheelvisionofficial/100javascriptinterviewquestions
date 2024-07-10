class MYJSON {
    static stringify(obj) {
        if (typeof obj !== 'object' || obj === undefined || obj instanceof Array) {
            return this.value(obj);
        }
        if (obj === null) {
            return 'null';
        }

        let objString = Object.keys(obj).map((k) => {
            return (typeof obj[k] === 'function') ? null : `"${k}":${this.value(obj[k])}`;
        });

        return `{${objString}}`;
    }

    static value(val) {
        switch (typeof val) {
            case 'boolean':
            case 'number':
                return isFinite(val) ? `${val}` : `null`;
            case 'string':
                return `${val}`;
            case 'function':
            case 'symbol':
            case 'undefined':
                return 'null';
            case 'object':
                if (val instanceof Date) {
                    return `"${val.toISOString()}"`;
                }
                if (val.constructor === String) {
                    return `"${val}"`;
                }
                if (val.constructor === Number || val.constructor === Boolean) {
                    return isFinite(val) ? `${val}` : `null`;
                }
                if (Array.isArray(val)) {
                    return `[${val.map(value => this.value(value)).join(',')}]`;
                }
                return this.stringify(val);
        }

    }
}

let obj1 = {
    a: 1,
    b: {
        c: 2,
        d: -3,
        e: {
            f: {
                g: -4
            }
        },
        h: {
            i: 5
        }
    }
}

console.log(MYJSON.stringify([1, 2, 3]));
console.log(JSON.stringify([1, 2, 3]));