const numbers = [1, 55, 33, 5, 66, 7, 324, 6, 65, 12, 3];

function bubble_sort(array) {
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1])
                [array[j], array[j + 1]] = [array[j + 1], array[j]]

        }
    }
    return array
}


const sorted = bubble_sort(numbers)
console.log(sorted)