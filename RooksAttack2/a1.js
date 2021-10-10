const queensAttack2 = (n, k, r_q, c_q, obstacles) => {
    const impedable = (r_q, c_q, obstacle) => {
        const [r_o, c_o] = obstacle;
    
        const linearlyImpedable = () => {
            if (r_q === r_o) return true;
            if (c_q === c_o) return true;
    
            return false;
        };
        const diagonallyImpedable = () => {
            const diffRow = Math.abs(r_q - r_i);
            const diffCol = Math.abs(c_q - c_i);
    
            return diffRow === diffCol;
        };
    
        return linearlyImpedable() || diagonallyImpedable();
    };
    
    const computeImpedence = (n, r_q, c_q, impeder) => {
        const [r_i, c_i] = impeder;
    
        if (r_q === r_i) {
            if (c_q < c_i) return (n - c_i) + 1;
            else return c_i;
        } else {
            if (r_q < r_i) return (n - r_i) + 1;
            else return r_i;
        }
    };

    const computeTotalDiagonalWithoutImpedence = () => {
        const northEast = n - Math.max(r_q, c_q);
        const southWest = Math.min(r_q, c_q) - 1;

        const northWest = Math.min(n - r_q, c_q - 1);
        const southEast = Math.min(n - c_q, r_q - 1);

        return northEast + northWest + southEast + southWest;
    };

    const totalLinearWithoutImpedence = 2 * (n - 1);
    const totalDiagonalWithoutImpedence = computeTotalDiagonalWithoutImpedence();
    const totalWIthoutImpedence = totalLinearWithoutImpedence + totalDiagonalWithoutImpedence;

    const impeders = [];

    obstacles.forEach(obstacle => (
        impedable(r_q, c_q, obstacle)?
        impeders.push(obstacle) : {}
    ));

    let totalImpedence = 0;

    impeders.forEach(impeder => {
        const impedence = computeImpedence(n, r_q, c_q, impeder);
        totalImpedence += impedence;
    });

    return totalWIthoutImpedence - totalImpedence;
};

console.log(
    queensAttack2(5, 0, 3, 3, [])
);
