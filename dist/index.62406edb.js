const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
console.log("test");
console.log("Hola mundo");
const recipe = async function() {
    try {
        let response = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886---");
        let data = await response.json();
        if (!response.ok) throw new Error(`${data.message} (${response.status})`);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};
recipe();
if (module.hot) module.hot.accept();

//# sourceMappingURL=index.62406edb.js.map
