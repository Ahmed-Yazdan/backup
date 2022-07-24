const businessPerson = 450;
const minister = 350;
const army =6969;

/* if(businessPerson > minister){
    console.log("business person er pola is bigger");
}
else{
    console.log("minister person er pola is bigger");
} */

var max = Math.max(businessPerson, minister, army);
console.log("largest is", max);

function findLargest(first, second){
    if(first>second){
        return first;
    }
    else{
        return second;
    }
}

const largest = findLargest(43, 32323);
console.log(largest);