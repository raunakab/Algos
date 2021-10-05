const start = 0;
const end = 1;

/**
 * 1.   5)
 * *----*
 *          *----*
 * 
 * 
 * 2.   3)
 * *-----------*
 *          *-------*
 * 
 * 3.   4)
 * *---------------------*
 *          *-------*
 * 
 * 4.   1)
 *            *----*
 *          *----------*
 * 
 * 5.   2)
 *              *------------*
 *          *----------*
 * 
 * 6.   5)
 *                       *--------*
 *          *----------*
 */
// time: O(1)
// space: O(1)
const mergeable = (i1, i2) => {
    const [start1, end1] = i1;
    const [start2, end2] = i2;

    const withinInterval = (start, end, number) => ((start <= number) && (number <= end));

    const o1 = withinInterval(start1, end1, start2);
    const o2 = withinInterval(start1, end1, end2);

    if (o1 && o2) {
        // this is a 'pure-overlap'
        return true;
    } else if (o1) {
        // this is a 'left-semi-overlap'
        return true;
    } else if (o2) {
        // this is a 'right-semi-overlap'
        return true;
    } else if (start2 <= start1 && end1 <= end2) {
        // this is a 'pure-encompassing-overlap'
        return true;
    } else {
        // this is a 'pure-non-overlap'
        return false;
    }
}

// assumes the intervals are mergeable!
// does not perform any checking
// time: O(1)
// space: O(1)
const mergeIntervals = (i1, i2) => {
    const [start1, end1] = i1;
    const [start2, end2] = i2;

    return [
        Math.min(start1, start2),
        Math.max(end1, end2),
    ]
};

// assumes all intervals in `merged` are non-overlapping and each interval is well-formed
// assumes that `merged[i][end] < merged[i+1][start]` for all `i = 0,...,(merged.length - 1)`
const mergeInto = (merged, newInt) => {
    for (int in merged) {
        if (!mergeable(int, newInt)) continue;

        const newMergedInterval = mergeIntervals(int, newInt);
    }
};

const merge = intervals => {
    const merged = [];

    const length = intervals.length;

    for (let i = 0; i < length; i++) {
        const interval = intervals[i];
    }
};
