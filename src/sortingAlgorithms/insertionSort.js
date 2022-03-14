function getInsertionSortAnimations(array) {
    const animations = [];
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            swap(j, j-1, array, animations);
            j -= 1
        }
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

export {getInsertionSortAnimations};