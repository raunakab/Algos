const mergeIntervals = intervals => {
    intervals.sort((intA, intB) => intA[0] - intB[0]);
    
    const mergedIntervals = [];
    const appendToMergedInterval = newInterval => {
        const [start, end] = newInterval;
        const length = mergedIntervals.length;

        if (length === 0) mergedIntervals.push(newInterval);
        else {
            const lastInterval = mergedIntervals[length - 1];
            const [startLast, endLast] = lastInterval;

            if (startLast <= start && start <= endLast) mergedIntervals[length - 1][1] = Math.max(end, endLast);
            else mergedIntervals.push(newInterval);
        }
    };

    intervals.forEach(appendToMergedInterval);

    return mergedIntervals;
};

const gridlandMetro = (n, m, k, track) => {
    const tracks = {};

    track.forEach(t => {
        const [row, startCol, endCol] = t;

        if (tracks[row]) tracks[row].push([startCol, endCol]);
        else tracks[row] = [[startCol, endCol]];
    });

    Object.keys(tracks).forEach(row => {
        const rowTracks = tracks[row];
        const merged = mergeIntervals(rowTracks);

        tracks[row] = merged;
    });

    const totalSpots = n * m;

    let trackSum = 0;

    Object
        .values(tracks)
        .forEach(mergedIntervals => mergedIntervals
            .forEach(
                mergedInterval => trackSum += (mergedInterval[1] - mergedInterval[0] + 1)
            )
        );

    return totalSpots - trackSum;
};

console.log(
    gridlandMetro(4, 4, 3, [
        [2, 2, 3],
        [2, 2, 3],
        [3,1,4],
        [4,4,4],
    ]),

    gridlandMetro(4, 5, 7, [
        [1, 1, 2],
        [1, 4, 4],
        [2, 1, 2],
        [2, 2, 3],
        [2, 4, 5],
        [4, 1, 2],
        [4, 4, 5],
    ]),
);
