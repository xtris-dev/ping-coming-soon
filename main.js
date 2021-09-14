const email = document.getElementById("email");
const btn = document.getElementById("submit");
const form = document.getElementById("form");
const errorText = document.getElementById("error-text");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const emailVal = email.value;

	// check if it is a valid email
	if (!validateEmail(emailVal)) {
		email.classList.add("mail-error");
		errorText.style.display = "block";
	} else {
		form.classList.remove("mail-error");
		errorText.style.display = "none";
		alert("Thanks ! You'll be notified when we'll launch our product !")
	}
});

function validateEmail(email) {
	var re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
