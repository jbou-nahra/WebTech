
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
})
		
$.getJSON('recipes.json', function (data)
{ 
    allRecipes = data.recipe;
})
.error(function() 
{
    console.log('error: JSON not loaded'); 
}) 
.done(function() 
{

	for(var i = 0; i < allRecipes.length; i++)
	{
		const card = recipecardtemplate.content.cloneNode(true).children[0];
		const jsonname = allRecipes[i].name;
		const jsonlink = allRecipes[i].alink;
				
		let anchor = document.createElement('a');
		let link = document.createTextNode(jsonname);
		anchor.appendChild(link);
		anchor.href = jsonlink;		
		
		card.append(anchor);
		recipecardcontainer.append(card);
		recipes[i] = { name: allRecipes[i].name, element: card }
	}      
})
  




















