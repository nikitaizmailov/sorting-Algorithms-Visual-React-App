function getHeapSortAnimations(array) {
    const animations = [];
    buildMaxHeap(array, animations);
    for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
        swap(0, endIdx, array, animations);
        siftDown(0, endIdx - 1, array, animations);
    }
    return animations;
}

function buildMaxHeap(array, animations) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
        siftDown(currentIdx, array.length - 1, array, animations);
    }
}

function siftDown(currentIdx, endIdx, heap, animations) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
        const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
        let idxToSwap;
        if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
            idxToSwap = childTwoIdx;
        } else {
            idxToSwap = childOneIdx;
        } if (heap[idxToSwap] > heap[currentIdx]) {
            swap(currentIdx, idxToSwap, heap, animations);
            currentIdx = idxToSwap;
            childOneIdx = currentIdx * 2 + 1;
        } else {
            return;
        }
    }
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

export {getHeapSortAnimations};