let randomNumber = Math.floor((Math.random() * 100) + 1);
myFunction = () => {
    var bfName = document.getElementById("bfName").value;
    var gfName = document.getElementById("gfName").value;
    document.write(bfName + " Loves " + gfName + " " + randomNumber + "%");
}
document.getElementById("love-button").addEventListener("click", myFunction);



