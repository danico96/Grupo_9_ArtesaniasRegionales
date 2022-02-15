window.addEventListener("load", function () {

  let formulario = document.querySelector("form.form-login");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  formulario.addEventListener("submit", function (e) {
    let errors = [];

    function validarEmail(valor) {
      let reg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
      if (reg.test(valor)) {
        return
      } else {
        errors.push('Ingrese un email válido')
      }
    }

    if (email.value == '') {
      errors.push('Escribe tu email')
    } else {
      validarEmail(email.value)
    }

    if (password.value == '') {
      errors.push('Escribe tu contraseña')
    } else if (password.value.length < 8) {
      errors.push('Tu contraseña tiene más de 7 caracteres')
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