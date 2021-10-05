const mergeable = (i1, i2) => {
    const [s1, e1] = i1;
    const [s2, e2] = i2;

    const withinInterval = (start, end, number) => ((start <= number) && (number <= end));

    const a1 = withinInterval(s1, e1, s2);
    const a2 = withinInterval(s1, e1, e2);

    if (a1 && a2) { return true; }
    else if (a1) { return true; }
    else if (a2) { return true; }
    else if ((s2 <= s1) && (e1 <= e2)) { return true; }
    else { return false; }
};

const mergeIntervals = (i1, i2) => {
    const [s1, e1] = i1;
    const [s2, e2] = i2;

    return [
        Math.min(s1, s2),
        Math.max(e1, e2),
    ];
};

const appendToMerged = (merged, int) => {
    const length = merged.length;

    if (length === 0) merged.push(int);
    else {
        const top = merged[length - 1];

        if (mergeable(top, int)) merged[length - 1] = mergeIntervals(top, int);
        else merged.push(int);
    }
};

// time: O(nlog(n))
// - since sorting was used initially (after sorting is linear, however)
//
// space: O(n)
// - since a new vector is formed and returned (i.e., a copy is made)
// - in the worst case (i.e., all intervals are indeed non-overlapping, then a sorted version of the intervals are returned)
const merge = intervals => {
    intervals.sort((e1, e2) => {
        const [start1, end1] = e1;
        const [start2, end2] = e2;

        return start1 - start2;
    });

    const merged = [];

    const length = intervals.length;

    for (let i = 0; i < length; i++) {
        appendToMerged(merged, intervals[i]);
    }

    return merged;
};

console.log(merge([
    [1,2],
    [11,300],
    [0,2000],
    [10,11],
]));
