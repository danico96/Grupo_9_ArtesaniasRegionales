window.addEventListener("load", function () {

  let formulario = document.querySelector("form.form-login");

  formulario.addEventListener("submit", function (e) {
    let errors = [];

    let email = document.querySelector("#email")
    if (email.value = "") {
      errors.push("El campo email está vacío");
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errors.push("Ingrese un email válido");
    }

    let password = document.querySelector("#password")
    if (password.value = "") {
      errors.push("El campo password está vacío");
    } else if (password.value.length < 8) {
      errors.push("Recuerde que la contraseña tiene más de 7 caracteres");
    }

    if (errors.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector(".errores ul");
      errors.forEach(error => {
        ulErrores.innerHTML += `<li>${error}</li>`
      })
    }
  })
})