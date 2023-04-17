
// Exercise 7
function validate() {
	var error = 0;

	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById('fAddress');
	var fLastName = document.getElementById('fLastN');
	var fPassword = document.getElementById('fPassword');
	var fPhone = document.getElementById('fPhone');

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAdress = document.getElementById('errorAddress');
	var errorLastName = document.getElementById('errorLastN');
	var errorPassword = document.getElementById('errorPassword');
	var errorPhone = document.getElementById('errorPhone');

	// Regular expressions for input validation
	var letters = /^[a-zA-Z\u00f1\u00d1]{3,}$/;
	var numbers = /^\d{9}$/;
	var addressAndPassword = /^.{3,}$/;
	var email = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || !fName.value.match(letters)){
		// error++;
		errorName.style.display = 'block';
		fName.style.borderColor = 'red';
	} else {
		errorName.style.display = 'none';
		fName.style.borderColor = 'green';
	}

	if(fEmail.value == "" || !fEmail.value.match(email) || fEmail.length < 3){
		// error++;
		errorEmail.style.display = 'block';
		fEmail.style.borderColor = 'red';
	} else {
		errorEmail.style.display = 'none';
		fEmail.style.borderColor = 'green';
	}
	
	if(fAddress.value == "" || !fAddress.value.match(addressAndPassword)){
		// error++;
		errorAdress.style.display = 'block';
		fAddress.style.borderColor = 'red';
	} else {
		errorAdress.style.display = 'none';
		fAddress.style.borderColor = 'green';
	}

	if(fLastName.value == "" || !fLastName.value.match(letters)) {
		// error++;
		errorLastName.style.display = 'block';
		fLastName.style.borderColor = 'red';
	} else {
		errorLastName.style.display = 'none';
		fLastName.style.borderColor = 'green';
	}

	if(fPassword.value == "" || !fPassword.value.match(addressAndPassword) || fPassword.length > 8) {
		// error++;
		errorPassword.style.display = 'block';
		fPassword.style.borderColor = 'red';
	} else {
		errorPassword.style.display = 'none';
		fPassword.style.borderColor = 'green';
	}

	if(fPhone.value == "" || !fPhone.value.match(numbers) || (fPhone > 9 < fPhone)) {
		// error++;
		errorPhone.style.display = 'block';
		fPhone.style.borderColor = 'red';
	} else {
		errorPhone.style.display = 'none';
		fPhone.style.borderColor = 'green';
	}
	 
	// if(error>0){
	// 	alert("Error");
	// }else{
	// 	alert("OK");
	// }

}
