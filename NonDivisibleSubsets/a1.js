const nonDivisibleSubset = (k, s) => {
    // Write your code here
    const mods = Array.from(Array(k)).map(el => 0);

    s.forEach(element => mods[element % k] += 1);

    let sptr = 1;
    let eptr = k - 1;
    let sum = 0;

    if (mods[0] > 0) sum += 1;

    while (sptr <= eptr) {
        if (sptr === eptr) sum += 1;
        else {
            const a = mods[sptr];
            const b = mods[eptr];
            if (a >= b) sum += a;
            else sum += b;
        }

        sptr += 1;
        eptr -= 1;
    }
    
    return sum;
};

console.log(nonDivisibleSubset(1, [1, 2, 3, 4, 5]));
// console.log(nonDivisibleSubset(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
