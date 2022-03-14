function getRadixSortAnimations(array) {
    const animations = [];
    if (array.length === 0) return array;
    const maxNumber = Math.max(...array);

    let digit = 0;
    while (maxNumber/10 ** digit > 0) {
        countingSort(array, digit, animations);
        digit++;
    }

    return animations;
}

function countingSort(array, digit, animations) {
    const sortedArray = new Array(array.length).fill(0);
    const countArray = new Array(10).fill(0);

    const digitColumn = 10 ** digit;
    for (const num of array) {
        const countIndex = Math.floor(num / digitColumn) % 10;
        countArray[countIndex]++;
    }

    for (let idx = 1; idx < 10; idx++) {
        countArray[idx] += countArray[idx - 1];
    }

    for (let idx = array.length - 1; idx > -1; idx--) {
        const countIndex = Math.floor(array[idx] / digitColumn) % 10;
        countArray[countIndex]--;
        const sortedIndex = countArray[countIndex];
        sortedArray[sortedIndex] = array[idx];
    }

    for (let idx = 0; idx < array.length; idx++) {

        animations.push([idx, sortedArray[idx]]);

        array[idx] = sortedArray[idx];
    }
}

export {getRadixSortAnimations};