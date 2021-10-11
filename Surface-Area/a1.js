const surfaceArea = A => {
    const surfaceOfStack = num => (num * 4) + 2;

    const H = A.length;
    const W = A[0].length;

    let sum = 0;

    for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
            const currNum = A[y][x];

            const topImp = (y !== 0 ? Math.min(currNum, A[y-1][x]) : 0);
            const rightImp = (x !== (W - 1) ? Math.min(currNum, A[y][x+1]) : 0);
            const bottomImp = (y !== (H - 1) ? Math.min(currNum, A[y+1][x]) : 0);
            const leftImp = (x !== 0 ? Math.min(currNum, A[y][x-1]) : 0);
            
            const surfaceWithNoImpedence = surfaceOfStack(currNum);
            
            sum += surfaceWithNoImpedence - (topImp + rightImp + bottomImp + leftImp);
        }
    }

    return sum;
};

console.log(
    surfaceArea([
        [1, 3, 4],
        [2, 2, 3],
        [1, 2, 4],
    ])
);
