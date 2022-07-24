const getItem = (id) => {
    return document.getElementById(id);
}

const displayBtn = getItem("displayBtn");
const downloadBtn = getItem("downloadBtn");
const imgConverted = getItem("imgConverted");
const myCanvas = getItem("myCanvas");

// SOLID or GRADIENT
getItem("solidColorBtn").addEventListener("click", () => {
    getItem("pickedColor1").classList.remove("noneDisplay");
    getItem("pickedColor").classList.remove("noneDisplay");
})
getItem("solidColorBtn").addEventListener("click", () => {
    getItem("pickedColor1").classList.remove("noneDisplay");
    getItem("pickedColor").classList.remove("noneDisplay");
})
getItem("solidColorBtn").addEventListener("click", () => {
    getItem("pickedColor1").classList.remove("noneDisplay");
    getItem("pickedColor").classList.remove("noneDisplay");
})

// PREVIEW
displayBtn.addEventListener("click", () => {
    const pickedColor = getItem("pickedColor");
    const pickedColor1 = getItem("pickedColor1");
    const color = pickedColor.value;
    const color1 = pickedColor1.value;
    const ctx = myCanvas.getContext("2d");
    if (pickedColor1.value !== "") {
        ctx.fillStyle = color1;
    } else {
        ctx.fillStyle = color;
    }
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
    console.log(color)
    document.getElementById("pickedColor1").value = "";
    ;
});

// DOWNLOAD
downloadBtn.addEventListener("click", () => {
    console.log("CLicked")

    const dataURI = myCanvas.toDataURL("image/jpeg");
    imgConverted.src = dataURI;

    const a = document.createElement("a");
    a.style.width = '1920px';
    a.style.height = '1080px';
    document.body.appendChild(a);
    a.href = dataURI;
    console.log(a);
    a.download = "MadeWithLove.png";
    a.click();
    document.body.removeChild(a);
})