const passwordInput = document.getElementById("password");
const showPasswordButton = document.getElementById("showPassword");

showPasswordButton.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordButton.textContent = "";
  } else {
    passwordInput.type = "password";
    showPasswordButton.textContent = "";
  }
});
