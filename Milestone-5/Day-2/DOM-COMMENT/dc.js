document.getElementById('delete-btn').addEventListener('click', function(){
    document.getElementById('secret-info').style.display='none';
});
// ------------------------------------------//
//focus
document.getElementById('delete-text').addEventListener('focus', function(){
    document.body.style.backgroundColor='red';
});
//Blur
document.getElementById('delete-text').addEventListener('blur', function(){
    document.body.style.backgroundColor='white';
});
//KeyUp
document.getElementById('delete-text').addEventListener('keyup', function(event){
    const deleteBtn = document.getElementById('delete-btn');
    if(event.target.value == 'delete'){
        deleteBtn.removeAttribute('disabled');
    } else{deleteBtn.setAttribute('disabled',true)}
});