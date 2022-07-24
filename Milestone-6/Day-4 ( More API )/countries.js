const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data => displayCountries(data));
};

const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country.name);
    // }
    const countriesDiv  = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')" >Details</button>
        `;
        countriesDiv.appendChild(div);
    })
};

loadCountries();

loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => displayCountryDetail(data));
};

const displayCountryDetail = country => {
    // console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h5>Country name: ${country.name}</h5>
        <p>Population: ${country.population}</p>
        <img src="${country.flag}">
    `;
}