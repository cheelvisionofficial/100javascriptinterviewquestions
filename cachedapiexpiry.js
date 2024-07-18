// Cached api call with expiry time

/**
 * Implement a function in JavaScript that caches the API response
 * for the given amount of time. If a new call is made between that time, the 
 * response from the cache will be returned, else a fresh API call will be made.
 */

const makeApiCall = async (path, config) => {
    try {
        let response = await fetch(path, config);
        response = await response.json();
        return response;
    } catch (e) {
        console.log('error', e);
    }
    return null;
}


const cachedApiCall = (time) => {
    const cache = {}; // object hashmap

    return async function (path, config = {}) {
        const key = generateKey(path, config);

        // get the value of the key
        let entry = cache[key];
        console.log(entry, 'this is entry');

        if (!entry || Date.now() > entry.expiryTime) {
            // make new api call
            try {
                const value = await makeApiCall(path, config);
                cache[key] = {
                    value,
                    expiryTime: Date.now() + time
                }
            } catch (e) {
                console.log(e)
            }
        }
        return cache[key].value;
    }
}

const generateKey = (path, config) => {
    const key = Object.keys(config).
        sort((a, b) => a.localeCompare(b)).
        map((k) => k + ":" + config[k].toString()).join("&");
    return path + key;
}


const call = cachedApiCall(500);

call('https://jsonplaceholder.typicode.com/todos/1', {}).then((res) => {
    console.log(res);
});

setTimeout(() => {
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((res) => {
        // console.log(res);
    });
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((res) => {
        // console.log(res);
    });
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((res) => {
        // console.log(res);
    });
}, 2000);





