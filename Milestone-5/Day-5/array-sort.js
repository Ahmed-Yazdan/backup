const numbers = [4,5,7,2,1,0,3,0,3];
const sortedNumbers = numbers.sort();

const friends = ['ariyan', 'dipjol', 'sagor bai', 'adit voss'];
const sortedFriends = friends.sort();
const reversedFriends = friends.reverse();
console.log(sortedFriends);

// number sorting fun
const bigNumbers = [324,546,12,76,78,345,2134,546,87];
const sortedBigNumbers = bigNumbers.sort(function(a,b){
    return a - b;
});
console.log(sortedBigNumbers);