const numbers = [1, 2, 3, 4, 5, 6, 7, 55, 66, 77, 88, 99, 111, 222, 333, 444, 555, 666, 4445, 99999];


function binary_search(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === target)
            return mid;
        if (array[mid] > target)
            end = mid - 1;
        if (array[mid] < target)
            start = mid + 1;
    }
    return -1;
}

const index = binary_search(numbers, 1);
console.log(index)