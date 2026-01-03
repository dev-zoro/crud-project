const signupBtn = document.getElementById("signup-btn");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const userTypeEl = document.getElementById("usertype");

signupBtn.addEventListener("click", userSignup);

function userSignup() {
	window.location.href = "./html/signup.html";
}

const storedUser = JSON.parse(localStorage.getItem("user"));

if (storedUser) {
	nameEl.innerText = "Name: " + storedUser.username;
	emailEl.innerText = "Email: " + storedUser.email;
	userTypeEl.innerText = "User Type: User";
}
