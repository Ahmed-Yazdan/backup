const numbers = [1,55,33,1,5,66,7];

function linear_search(array, target){
    for(let i = 0; i<array.length; i++){
        const element = array[i]
        if(element=== target)
        return i;
    }
    return -1;
};
const index = linear_search(numbers, 55);
console.log(index);