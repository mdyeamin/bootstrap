const searchFood = () => {
    const searchFiled = document.getElementById('search-filed')
    const searchFiledText = searchFiled.value;
    searchFiled.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFiledText}`
    fetch(url).then(res => res.json()).then(data => displayMealArea(data.meals))

}

const displayMealArea = meal => {
    const meanDiv = document.getElementById('meal-div')
    meal.forEach((meal) => {
        // console.log(meal);

        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div onclick="showMeals(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 190)}</p>
                </div>
            </div>
        `
        meanDiv.appendChild(div)
    })
}

const showMeals = mealId => {


    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => mealContent(data.meals[0]))
}

const mealContent = meals => {
    console.log(meals);
    const showMealsContainer = document.getElementById('show-meals')

    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
        <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meals.strMeal}</h5>
                <p class="card-text">${meals.strInstructions.slice(0, 190)}</p>
                <a href="${meals.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        `;
    showMealsContainer.appendChild(div)


}