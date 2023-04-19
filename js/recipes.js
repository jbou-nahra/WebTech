
var allRecipes = new Array();
const recipecardtemplate = document.querySelector("[data-recipe-template]");
const recipecardcontainer = document.querySelector("[data-recipe-cards-container]");
const searchinput = document.querySelector("[data-search]");

searchinput.addEventListener("input", function (e) 
{
	const value = e.target.value;
	cosole.log(value);
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
		recipename.textContent = allRecipes[i].name;
		recipecardcontainer.append(card);
		console.log(allRecipes);
	}      
})
  




















