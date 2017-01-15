function askQuestions() {


	var firstName = prompt('What is your first name'),
		lastName = prompt('What is your last name'),
		fullName = firstName + ' ' + lastName;

	console.log(fullName);

	var age = prompt('How old are you');
	age = parseInt(age);

	if (age>=18) {
			console.log('user is an adult');

	} 
	else if (age>= 13) {
		console.log('user is a teenager');
	}

	else {
		console.log('user is a child');
	}

	if (firstName === 'General' && lastName !== 'Assembly') {
		console.log ('Hello general')
		}
	
}


// when the page has loaded
$(function() {

	// when the user clicks an h3 element
	$('h3').on ('click', function () {

		// hide the next element
		$(this).next().slideToggle(2000);
	});

});
