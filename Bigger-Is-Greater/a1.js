const biggerIsGreater = w => {
    const length = w.length;
    let biggestDelta = Number.MAX_VALUE;
    let indexOfBiggestDelta = -1;

    for (let i = 0; i < length - 1; i++) {
        const curr = w.charCodeAt(i);
        const next = w.charCodeAt(i + 1);
        
        const delta = next - curr;
        console.log(w[i], w[i+1], delta);
        
        if (delta > 0) {
            biggestDelta = delta;
            indexOfBiggestDelta = i;
        }
    }
    
    if (biggestDelta <= 0) return 'no answer';
    
    const letters = Array.from(w);
    
    const letter1 = letters[indexOfBiggestDelta];
    const letter2 = letters[indexOfBiggestDelta + 1];
    
    letters[indexOfBiggestDelta] = letter2;
    letters[indexOfBiggestDelta + 1] = letter1;
    
    const newWord = letters.toString().replace(/,/g, '');

    return newWord;
};

console.log(
    biggerIsGreater('dkhc'),
);
