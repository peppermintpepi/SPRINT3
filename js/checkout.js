
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
	}

	if(fEmail.value == "" || !fEmail.value.match(email) || fEmail.length < 3){
		// error++;
		errorEmail.style.display = 'block';
		fEmail.style.borderColor = 'red';
	}
	
	if(fAddress.value == "" || !fAddress.value.match(addressAndPassword)){
		// error++;
		errorAdress.style.display = 'block';
		fAddress.style.borderColor = 'red';
	}

	if(fLastName.value == "" || !fLastName.value.match(letters)) {
		// error++;
		errorLastName.style.display = 'block';
		fLastName.style.borderColor = 'red';
	}

	if(fPassword.value == "" || !fPassword.value.match(addressAndPassword) || fPassword.length > 8) {
		// error++;
		errorPassword.style.display = 'block';
		fPassword.style.borderColor = 'red';
	}

	if(fPhone.value == "" || !fPhone.value.match(numbers)) {
		// error++;
		errorPhone.style.display = 'block';
		fPhone.style.borderColor = 'red';
	}
	 
	// if(error>0){
	// 	alert("Error");
	// }else{
	// 	alert("OK");
	// }

}
