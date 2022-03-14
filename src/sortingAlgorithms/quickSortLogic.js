function getQuickSortAnimations(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
    if (startIdx >= endIdx) {
        return;
    }
    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    while (rightIdx >= leftIdx) {
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            swap(leftIdx, rightIdx, array, animations);
        }
        if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
        if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
    }
    swap(pivotIdx, rightIdx, array, animations);
    const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if (leftSubarrayIsSmaller) {
        quickSortHelper(array, startIdx, rightIdx - 1, animations);
        quickSortHelper(array, rightIdx + 1, endIdx, animations);
    } else {
        quickSortHelper(array, rightIdx + 1, endIdx, animations);
        quickSortHelper(array, startIdx, rightIdx - 1, animations);
    }
}

function swap(i, j, array, animations) {
    let temp = array[j];

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
    array[i] = temp
}

export {getQuickSortAnimations};