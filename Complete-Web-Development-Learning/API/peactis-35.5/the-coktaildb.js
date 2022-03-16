const searchBtn = () => {
    const searchTxt = document.getElementById('search-txt')
    const searchValue = searchTxt.value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaydrink(data.drinks[0]))
}

const displaydrink = drink => {
    console.log(drink);
}