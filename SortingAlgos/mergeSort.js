const merge = (list1, list2) => {
    const l1Length = list1.length;
    const l2Length = list2.length;
    const totalLength = l1Length + l2Length;
    const newArr = Array(totalLength);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < l1Length && j < l2Length) {
        const l1El = list1[i];
        const l2El = list2[j];

        if (l1El <= l2El) {
            newArr[k] = l1El;
            i++;
        } else {
            newArr[k] = l2El;
            j++;
        }

        k++;
    }

    if (i < l1Length) for (; i < l1Length; i++, k++) newArr[k] = list1[i];
    else if (j < l2Length) for (; j < l2Length; j++, k++) newArr[k] = list2[j];

    return newArr;
};

const mergeSort = list => {
    const length = list.length;

    if (length === 1) return list;
    else {
        const halfLength = Math.floor(length / 2);
        const l1 = list.splice(0, halfLength);
        const l2 = list;

        const sortedL1 = mergeSort(l1);
        const sortedL2 = mergeSort(l2);

        return merge(sortedL1, sortedL2);
    }
};

console.log(
    mergeSort([ 1, 2, 3, ]),
    mergeSort([ 23, 10, 3, 11, 11, 2, 12, 8, 4, 5, 9, 6, 1, 11, 7, ]),
);
