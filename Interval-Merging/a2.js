const appendToMerged = (merged, int) => {
    const length = merged.length;
    const [start, end] = int;

    let startMarker = length;
    let endMarker = -1;

    for (let i = 0; i < length; i++) {
        const [iStart, iEnd] = merged[i];
        const [iStart2, iEnd2] = merged[length - 1 - i];

        if (iStart <= end) endMarker = i;
        if (start <= iEnd2) startMarker = (length - 1 - i);
    }

    if (startMarker !== length && endMarker !== -1 && startMarker <= endMarker) {
        const newStart = Math.min(start, merged[startMarker][0]);
        const newEnd = Math.max(end, merged[endMarker][1]);
        
        const delta = endMarker - startMarker + 1;
        
        merged.splice(startMarker, delta);
        merged.push([newStart, newEnd]);
    } else {
        merged.push(int);
    }

    return;
};

const merge = intervals => {
    const merged = [];
    for (i in intervals) appendToMerged(merged, intervals[i]);

    return merged;
};

console.log(merge([
    [2,7],
    [1,12],
    [300,301]
]));
