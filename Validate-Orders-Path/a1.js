const PICKUP = 'P';
const DROPOFF = 'D';

// time: O(n)
// - iterate through the entire input vector (which has size `n`)
//
// space: O(n)
// a set is constructed which, in the worst case, will contain all orders
const validate = orders => {
    const orderSet = new Set();
    const length = orders.length;

    for (let i = 0; i < length; i++) {
        const [type, num] = orders[i];

        if (type === PICKUP) {
            if (orderSet.has(num)) return false;
            orderSet.add(num);
        } else {
            if (!orderSet.has(num)) return false;
            orderSet.delete(num);
        }
    }

    return orderSet.size === 0;
};

console.log(validate([
    [PICKUP, 1],
    [DROPOFF, 1],
    [PICKUP, 3],
    [DROPOFF, 2],
]));
