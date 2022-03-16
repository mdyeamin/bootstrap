
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountreis(data))
}

loadCountries()

const displayCountreis = countries => {

    const countryCoutainer = document.getElementById('country-container')
    countries.forEach(country => {  // যদি ফাংশনে return না লাগে তখন forEach 
        const div = document.createElement('div')
        div.classList.add('country-div')

        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryName('${country.name}')">Details</button>

                        `
        countryCoutainer.appendChild(div)
    })
}

const loadCountryName = name => {

    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {

    const displyCountryByName = document.getElementById('disply-country-byName')
    displyCountryByName.innerHTML = `
    <h3>${country.name}</h3>
    <p>${country.population}</p>
    <img width="150px" src="${country.flag}">

`
}