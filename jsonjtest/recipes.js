
	var allQuestions = new Array();
function loadQuestions() {
	
		
    $.getJSON('question.json', function (data) {
        allQuestions = data.quiz;
    })
    .error(function() {
        console.log('error: JSON not loaded'); 
    })
    .done(function() {
        console.log(allQuestions[0]);
        //printQuestion(allQuestions[0]); 
    });
}