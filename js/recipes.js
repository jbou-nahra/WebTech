
var allRecipes = new Array();
const recipecardtemplate = document.querySelector("[data-recipe-template]");
const recipecardcontainer = document.querySelector("[data-recipe-cards-container]");

function loadRecipes() {
	
		
    $.getJSON('recipes.json', function (data) {
        allRecipes = data.recipe;
    })
    .error(function() {
        console.log('error: JSON not loaded'); 
    })
    .done(function() {
		for(var i = 0; i < allRecipes.length; i++)
		{
			const card = recipecardtemplate.content.cloneNode(true).children[0];
			const recipename = card.querySelector("[data-recipename]");
			recipename.textContent = allRecipes[i].name;
			recipecardcontainer.append(card);
			console.log(allRecipes);
		}
    });
}