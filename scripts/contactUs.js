const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const queryInput = document.getElementById("query");
const submitBtn = document.getElementById("contact-btn");
const signupBtn = document.getElementById("signup-btn");
const errors = document.querySelectorAll(".error");
console.log(errors);

signupBtn.addEventListener("click", userSignup);

function userSignup() {
	window.location.href = "./signup.html";
}

function showError(input, message, index) {
	input.classList.add("error-border");
	errors[index].innerText = message;
	errors[index].style.display = "block";
}

function clearError(input, index) {
	input.classList.remove("error-border");
	errors[index].style.display = "none";
}

nameInput.addEventListener("blur", () => {
	if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
		showError(nameInput, "Enter a valid Name!", 0);
	} else {
		clearError(nameInput, 0);
	}
	// validForm();
});

emailInput.addEventListener("blur", () => {
	if (
		!/^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(emailInput.value)
	) {
		showError(emailInput, "Enter a valid email!", 1);
	} else {
		clearError(emailInput, 1);
	}
	// validForm();
});

queryInput.addEventListener("blur", () => {
	if (!queryInput.value) {
		queryInput.classList.add("error-border");
		showError(queryInput, "Don't keep it blank", 2);
	} else {
		queryInput.classList.remove("error-border");
		clearError(queryInput, 2);
	}
	// validForm();
});

function validForm() {
	const isValid = nameInput && emailInput && queryInput;
	if (isValid) {
		alert("Message send successfully!");
		window.location.reload();
		window.location.href = "./contactUs.html";
	}
}
