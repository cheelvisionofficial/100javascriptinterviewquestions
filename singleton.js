const Singleton = (function () {
    let instance;

    class SingletonClass {
        constructor() { }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = new SingletonClass();
            }
            return instance;
        }
    }
})();

const object1 = Singleton.getInstance();
const object2 = Singleton.getInstance();
const object3 = Singleton.getInstance();


console.log(object3 === object2);

