// const items = document.getElementsByClassName('item');

// for(const item of items){
//     item.addEventListener('click', function(event){
//         // document.getElementById('item-conatiner').removeChild(item);
//         event.target.parentNode.removeChild(event.target);
//     })
// }

document.getElementById('add-item').addEventListener('click',function(){
    const list = document.createElement('li');
    list.innerText = 'Brand new item';

    const parent = document.getElementById('item-container');
    parent.appendChild(list);
});

document.getElementById('item-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
});