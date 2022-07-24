const MyFavDate = new Date('1971-12-16');
console.log(MyFavDate);
const anotherDate = new Date(1979,3,26,11,50,40,80);
console.log(anotherDate);

if(MyFavDate.getTime() < anotherDate.getTime()){
    console.log('myfave is smaller')
}