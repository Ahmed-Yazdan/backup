const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    if(id && value){
        localStorage.setItem(id,value);
    }

    idInput.value = '';
    valueInput.value = '';
};

const clearLocalStorage = () => {
    localStorage.clear();
}

// Have to use JSON.stringify() if we want to to store array/object as a value inside the local/session storage
// Have to use JSON.parse() if we wamt to use a array/object from local/session storage