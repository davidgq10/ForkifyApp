import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    let response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    let data = await response.json();
    console.log(data);
    if (!response.ok) throw new Error(`${data.message} (${response.status})`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.sourceUrl,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(recipe);
  } catch (err) {
    alert(err);
  }
};
