function getSelectionSortAnimations(array) {
    let animations = [];
    let startIdx = 0;
    while (startIdx < array.length - 1) {
        let smallestIdx = startIdx;
        for (let i = startIdx + 1; i < array.length; i++) {
            if (array[smallestIdx] > array[i]) smallestIdx = i;
        }
        swap(startIdx, smallestIdx, array, animations);
        startIdx++;
    }
    return animations;
}

function swap(i, j, array, animations) {
    const temp = array[j];

    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);

    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);

    // we overwrite the value at index j with value from array at index i
    // we overwrite the value at index i with value from array at index j
    animations.push([[j, array[i]], [i, array[j]]]);

    array[j] = array[i];
    array[i] = temp;
}

export {getSelectionSortAnimations};