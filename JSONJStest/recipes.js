
    console.log( "JSON loaded!" );
	var allQuestions = new Array();
function loadQuestions() {
	
	console.log( "JSON loaded!" );
		
    $.getJSON('question.json', function (data) {
        allQuestions = data.quiz;
    })
    .error(function() {
        console.log('error: JSON not loaded'); 
    })
    .done(function() {
        console.log( "JSON loaded!" );
        printQuestion(allQuestions[0]); 
    });
}