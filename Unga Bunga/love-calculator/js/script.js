const showResult = () => {
    const bfName = document.getElementById("bf-name").value;
    const gfName = document.getElementById("gf-name").value;
    let number = Math.floor(Math.random() * 100);
    if(bfName.toLowerCase() === "ahmed yazdan" && gfName.toLowerCase() === "parisha azad"){
        number = 100;
    }
    else if(bfName.toLowerCase() === "yazdan" && gfName.toLowerCase() === "parisha"){
        number = 100;
    }
    document.getElementById("result").innerHTML = `${bfName} Loves ${gfName} at ${number}%`;
};

document.getElementById("check-button").addEventListener("click", showResult);