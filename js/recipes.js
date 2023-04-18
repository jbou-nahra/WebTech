
	var allRecipes = new Array();
function loadRecipes() {
	
		
    $.getJSON('recipes.json', function (data) {
        allRecipes = data.recipe;
    })
    .error(function() {
        console.log('error: JSON not loaded'); 
    })
    .done(function() {
        console.log(allRecipes);
    });
}