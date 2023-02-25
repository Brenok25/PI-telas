const passwordInput = document.getElementById("password");
const showPasswordButton = document.querySelector("span i")
showPasswordButton.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordButton.classList.add("hide-btn")
  } else {
    passwordInput.type = "password";
    showPasswordButton.classList.remove("hide-btn");
  }
});


// Esse script basicamente troca o tipo dp input ao mesmo tempo que adiciona uma classe para o icon ficar cortado na tela