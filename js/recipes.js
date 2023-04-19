
var allRecipes = new Array();
const recipecardtemplate = document.querySelector("[data-recipe-template]");
const recipecardcontainer = document.querySelector("[data-recipe-cards-container]");
const searchinput = document.querySelector("[data-search]");

var recipes = new Array();

searchinput.addEventListener("input", function (e) 
{
	const value = e.target.value.toLowerCase();
	
	for(var i = 0; i < recipes.length; i++)
	{
		const isvisible = recipes[i].name.toLowerCase().includes(value);
		recipes[i].element.classList.toggle("hide", !isvisible);
	}      
	//console.log(recipes);
})
		
$.getJSON('recipes.json', function (data)
{ 
    allRecipes = data.recipe;
	console.log("in here");
	console.log(allRecipes);
})
.error(function() 
{
    console.log('error: JSON not loaded'); 
}) 
.done(function() 
{
	console.log("before for loop");
	for(var i = 0; i < allRecipes.length; i++)
	{
		console.log("in for loop");
		const card = recipecardtemplate.content.cloneNode(true).children[0];
		const recipename = card.querySelector("[data-recipename]");
		var recipelink = card.querySelector("[data-recipelink]");
		recipename.textContent = allRecipes[i].name;
		var recipelinktemp = allRecipes[i].alink;
		recipelink = recipelinktemp.link(URL);
		recipecardcontainer.append(card);
		console.log(allRecipes);
		recipes[i] = { name: allRecipes[i].name, element: card }
	}      
})
  




















