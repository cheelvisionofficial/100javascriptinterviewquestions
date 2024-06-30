// Aggregate array of objects on the given keys

const endorsements = [
    {
        skill: 'css',
        user: 'Bill'
    },
    {
        skill: 'js',
        user: 'Bill'
    },
    {
        skill: 'css',
        user: 'Cheel'
    },
    {
        skill: 'php',
        user: 'vision'
    },
    {
        skill: 'css',
        user: 'CheelVision'
    },
]

const aggregate = (arr, on, who) => {
    const agg = arr.reduce((a, b) => {
        const onValue = b[on];
        const whoValue = b[who];

        if (a[onValue]) {
            a[onValue] = {
                [on]: onValue,
                [who]: [...a[onValue][who], whoValue]
            }
        } else {
            a[onValue] = {
                [on]: onValue,
                [who]: [whoValue]
            }
        }
        return a;
    }, {});
    return agg;
}


// on who
console.log(aggregate(endorsements, "user", "skill"));

// {
//     Bill: { user: 'Bill', skill: [ 'css', 'js' ] },
//     Cheel: { user: 'Cheel', skill: [ 'css' ] },
//     vision: { user: 'vision', skill: [ 'php' ] },
//     CheelVision: { user: 'CheelVision', skill: [ 'css' ] }
// }

/**
 *   [
 *     { user: 'Bill', skill: [ 'css', 'js' ] },
 *     { user: 'Cheel', skill: [ 'css' ] },
 *     { user: 'vision', skill: [ 'php' ] },
 *     { user: 'CheelVision', skill: [ 'css' ] }
 *   ]
 * 
 */