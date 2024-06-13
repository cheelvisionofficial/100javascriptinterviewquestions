const instanceOf = (obj, target) => {
    if (obj === null || typeof obj !== 'object') {
        return false;
    }

    if (typeof target !== 'function') {
        throw new Error('Target is not correct');
    }

    let objProto = Object.getPrototypeOf(obj);
    while (objProto) {
        if (objProto === target.prototype) {
            return true;
        }
        objProto = Object.getPrototypeOf(objProto);
    }
    return false;
}


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(instanceOf(auto, Car));
// Expected output: true

console.log(instanceOf(auto, Object));
// Expected output: true