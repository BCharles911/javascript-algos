var testArray = [1, 2, 35, 67, 32, 57, 87, 43, 8, 654765, 25, 6, 54, 3];

function quickSort(array) {

    if (array.length === 1) {
        return array;
    }
    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    }

    if (leftArray.length > 0 && rightArray.length > 0) {
        return [... quickSort(leftArray), pivot, ... quickSort(rightArray)]
    } else if (leftArray.length > 0) {
        return [... quickSort(leftArray), pivot];
    } else {
        return [pivot, ... quickSort(rightArray)];
    }

}

console.log(quickSort(testArray).join());
console.log('something by andrej on git');
