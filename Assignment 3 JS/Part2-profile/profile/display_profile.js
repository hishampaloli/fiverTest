"use strict";

$(document).ready( () => {
	// display data from session storage
	const email = sessionStorage.getItem('email');
	const phone = sessionStorage.getItem('phone');
	const postal = sessionStorage.getItem('postal');
	const dob = sessionStorage.getItem('dob');
	
	if (email) { // logged in
		$("#email").text(email);
		$("#phone").text(phone);
		$("#postal").text(postal);
		$("#dob").text(dob);

	} else {
		goToPage("index.html");
	}

	$("#back").click( () => {
		window.location.href = 'index.html';

	}); // end of click()
	
}); // end of ready()