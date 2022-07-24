alert('Alert Parisha is cumming');
const maComing = () => {
    alert('Maa is present');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic');
    console.log(response);
    if(response === true){
        alert('Aho vatija aho');
    } else{
        alert('Molom lagay dimu');
    }
};

const askName = () => {
    prompt('What is your name');
}