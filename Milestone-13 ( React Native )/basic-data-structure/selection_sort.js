const numbers = [23, 345, -6, -69, 69, 324, 1, 7, 8, 4];

function selection_sort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        [array[i], array[min]] = [array[min], array[i]]
    }
    return array;
}

