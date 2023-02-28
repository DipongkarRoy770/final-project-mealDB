const mealDB= ()=>{
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
   .then(res => res.json())
   .then(data => displayMealDB(data.meals))
}
const displayMealDB =meals =>{
  const container = document.getElementById('container')
  for(const food of meals){
    console.log(food)
    const foodBox= document.createElement('div') ;
    foodBox.innerHTML = `
    <div class="card card-compact w-96 bg-base-300 shadow-xl">
    <figure><img class="w-full h-44" src="${meals[0].strMealThumb}" alt="mealDB" /></figure>
    <div class="card-body">
      <h2 class="card-title text-2xl font-semibold">${meals[0].strMeal}</h2>
      <h2 class="card-title text-1xl ">${meals[0].strIngredient4}</h2>
      <h2 class="card-title text-1xl ">${meals[0].strIngredient5}</h2>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
    `;
    container.appendChild(foodBox)
  }
}
mealDB()