const cutTheTree = (data, edges) => {
    const n = data.length;

    const edgeMap = {};
    edges.forEach(edge => {
        const [e1, e2] = edge;

        if (edgeMap[e1]) edgeMap[e1].add(e2);
        else edgeMap[e1] = new Set([e2]);

        if (edgeMap[e2]) edgeMap[e2].add(e1);
        else edgeMap[e2] = new Set([e1]);
    });
    const purge = num => {
        const children = Array.from(edgeMap[num]);
        children.forEach(child => edgeMap[child].delete(num));
        return children;
    };

    let toPurge = [1];

    while (toPurge.length !== 0) {
        const num = toPurge.splice(0, 1)[0];
        const children = purge(num);
        toPurge = toPurge.concat(children);
    }

    const accumulations = Array(n).fill(0);

    const accumulate = num => {
        const thisVal = data[num - 1];
        const children = Array.from(edgeMap[num]);

        let childrenVal = 0;

        children.forEach(child => childrenVal += accumulate(child));

        accumulations[num - 1] = thisVal + childrenVal;
        return accumulations[num - 1];
    };

    accumulate(1);

    const rootVal = accumulations[0];

    let smallestDelta = Number.MAX_VALUE;
    let i = 1;
    for (; i < n; i++) {
        const delta = Math.abs((2 * accumulations[i]) - rootVal);
        if (delta < smallestDelta) smallestDelta = delta;
    }

    return smallestDelta;
};

console.log(
    cutTheTree([100, 200, 100, 500, 100, 600], [[1, 2], [2, 3], [2, 5], [4, 5], [5, 6]]),
);
