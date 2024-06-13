// Create a simple store class with set(key,value),
// get(key) and has(key) methods

const Store = function () {
    this.list = {};

    this.set = function (key, value) {
        this.list[key] = value;
    }

    this.get = function (key) {
        return this.list[key];
    }

    this.has = function (key) {
        return !!(this.list[key]);
    }
}

const s1 = new Store();

s1.set('a', 10);
s1.set('b', 20);
s1.set('c', 30);

console.log(s1.has('c'));
