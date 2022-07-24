document.getElementById('btn').addEventListener('click', function(){
    location.assign("https://www.google.com/");
});

document.getElementById('go-back').addEventListener('click', () => {
    history.go(1);
});