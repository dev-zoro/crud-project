const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", loginUser);

function loginUser() {
	const storedUser = JSON.parse(localStorage.getItem("user"));
	// console.log(storedUser);

	if (!storedUser) {
		alert("No user found. Pleasee sign up first");
		return;
	}

	// if (
	// 	username.value === storedUser.username &&
	// 	password.value === storedUser.password
	// ) {
	// 	// console.log("In If block");
	// 	alert("Login Successfull!");
	// 	window.location.href = ".././index.html";
	// } else {
	// 	// console.log("In else block");
	// 	alert("Invalid username or password");
	// }

	if (username.value === storedUser.username) {
		if (password.value === storedUser.password) {
			alert("Login Successfull!");
			window.location.href = ".././index.html";
		} else {
			alert("Invalid password!");
		}
	} else {
		alert("Invalid username!");
	}
}
