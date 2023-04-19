
var allRecipes = new Array();
const recipecardtemplate = document.querySelector("[data-recipe-template]");
const recipecardcontainer = document.querySelector("[data-recipe-cards-container]");


	
		
$.getJSON('recipes.json', function (data)
{ 
    allRecipes = data.recipe;
	console.log("in here");
	console.log(allRecipes);
})
   
   
for(var i = 0; i < allRecipes.length; i++)
{
	console.log("in for loop");
	const card = recipecardtemplate.content.cloneNode(true).children[0];
	const recipename = card.querySelector("[data-recipename]");
	recipename.textContent = allRecipes[i].name;
	recipecardcontainer.append(card);
	console.log(allRecipes);
}
