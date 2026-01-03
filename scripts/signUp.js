// grab the Elements

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submit-btn");
const errors = document.querySelectorAll(".error");
let users = [];
let user = {};

function showError(input, message, index) {
	input.classList.add("error-border");
	errors[index].innerText = message;
	errors[index].style.display = "block";
}

function clearError(input, index) {
	input.classList.remove("error-border");
	errors[index].style.display = "none";
}

username.addEventListener("blur", () => {
	if (!/^[a-zA-Z0-9]+$/.test(username.value)) {
		showError(username, "Username must be alphanumeric", 0);
	} else {
		clearError(username, 0);
	}
	checkFormValid();
});

email.addEventListener("blur", () => {
	if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
		showError(email, "Enter a valid email", 1);
	} else {
		clearError(email, 1);
	}
	checkFormValid();
});

password.addEventListener("blur", () => {
	if (!/(?=.*\d)(?=.*[!@#$%^&*]).{8,}/.test(password.value)) {
		showError(password, "Min 8 chars, 1 number & 1 symbol", 2);
	} else {
		clearError(password, 2);
	}
	checkFormValid();
});

confirmPassword.addEventListener("blur", () => {
	if (password.value !== confirmPassword.value) {
		showError(confirmPassword, "Password did not match", 3);
	} else {
		clearError(confirmPassword, 3);
	}
	checkFormValid();
});
function checkFormValid() {
	const isValid =
		/^[a-zA-Z0-9]+$/.test(username.value) &&
		/^[^@]+@[^@]+\.[^@]+$/.test(email.value) &&
		/(?=.*\d)(?=.*[!@#$%^&*]).{8,}/.test(password.value) &&
		password.value === confirmPassword.value;

	submitBtn.disabled = !isValid;
}

function userInfo() {
	user.username = username.value;
	user.email = email.value;
	user.password = password.value;
	console.log(user);

	localStorage.setItem("user", JSON.stringify(user));
	alert("SignUp successfull!");
	window.location.href = "login.html";
}

// function validateForm() {
// 	let isValid = true;

// 	if (!/^[a-zA-Z0-9]+$/.test(username)) {
// 		showError(username, "Username must be alphanumeric", 0);
// 		isValid = false;
// 	} else clearError(username, 0);

// 	if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
// 		showError(email, "Enter a valid email", 1);
// 		isValid = false;
// 	} else clearError(email, 1);

// 	if (
// 		!/([?=.*[0-9]])([?=.*[!@#$%^&*]])[a-zA-Z0-9!@#$%^&*]{8,}&/.test(
// 			password
// 		)
// 	) {
// 		showError(password, "Min 8 chars, 1 number & 1 symbol", 2);
// 		isValid = false;
// 	} else clearError(password, 2);

// 	if (password !== confirmPassword) {
// 		showError(confirmPassword, "Password does not match", 3);
// 		isValid = false;
// 	} else clearError(confirmPassword, 3);

// 	submitBtn.disabled = !isValid;
// }

// document.querySelectorAll("input").forEach((input) => {
// 	input.addEventListener("input", validateForm);
// });
// function print() {
// 	let username = document.getElementById("username").value.trim();
// 	let userEmail = document.getElementById("email").value.trim();
// 	let password = document.getElementById("password").value;
// 	let confirmPassword = document.getElementById("confirmPassword").value;

// 	// validation regex
// 	// Username: alphanumeric only
// 	let usernameRegex = /^[a-zA-Z0-9]+$/;

// 	// email: basic format check
// 	let emailRegex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 	// Password: min 8 chars, 1 number, 1 symbol
// 	let passwordRegex =
// 		/^([?=.*[0-9]])([?=.*[!@#$%^&*]])[a-zA-Z0-9!@#$%^&*]{8,}&/;

// 	if (!usernameRegex === username) {
// 		alert("Username must be alphanumeric");
// 		return;
// 	}

// 	if (!emailRegex === userEmail) {
// 		alert("Enter a valid email");
// 		return;
// 	}

// 	if (!passwordRegex === password) {
// 		alert(
// 			"Password must be at least 8 characters and contain 1 number and 1 symbol"
// 		);
// 		return;
// 	}

// 	if (password !== confirmPassword) {
// 		alert("Password and confirmPassword should be same!");
// 		return;
// 	}
// 	console.log("username:" + username);
// 	console.log("Email:" + userEmail);
// 	console.log("Password:" + password);
// }
