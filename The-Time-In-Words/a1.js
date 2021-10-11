const numToString = num => {
    const smallNumToString = smallNum => {
        switch (smallNum) {
            case 0: return 'zero';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            default: return null;
        };
    };
    
    const multipleOf10ToString = mulNum => {
        switch (mulNum) {
            case 10: return 'ten';
            case 20: return 'twenty';
            case 30: return 'thirty';
            case 40: return 'fourty';
            case 50: return 'fifty';
            case 60: return 'sixty';
            default: return null;
        };
    };

    if (num % 10 === 0) return multipleOf10ToString(num);
    else if (num > 20) {
        const rem = num % 10;
        const tensPlace = num - rem;

        return `${multipleOf10ToString(tensPlace)} ${smallNumToString(rem)}`;
    }
    else if (num < 10) return smallNumToString(num);
    else {
        switch (num) {
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 15: return 'fifteen';
            case 18: return 'eighteen';

            case 14:
            case 16:
            case 17:
            case 19: {
                const rem = num % 10;
                const tensPlace = num - rem;
                
                return `${smallNumToString(rem)}teen`;
            };

            default: return null;
        };
    }
};

console.log(
    numToString(1),
    numToString(10),
    numToString(11),
    numToString(14),
    numToString(24),
    numToString(54),
);
