

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const API_key = '8232039df73c045583d6366180d62fec';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))
}

const setInnerText = (id,text) => {
    document.getElementById(id).innerText=text;
};

const displayTemperature = (temperature) => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    // Setting weather icon
    const iconUrl = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weather-icon').setAttribute('src', iconUrl);
}

