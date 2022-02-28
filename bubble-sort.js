const unsortedArray = [45, 4, 67, 7, 2, 34, 7, 2, 3, 7, 7, 88, 6, 3, 34, 75, 6, 6663, 3, 23, 889, 452, 65378];

function bubbleSort(array) {

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i;  j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(unsortedArray))