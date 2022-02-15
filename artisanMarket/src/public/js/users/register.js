window.addEventListener("load", function () {

  let formulario = document.querySelector("form.form-register");
  let nombre = document.querySelector('#name');
  let apellido = document.querySelector("#lastname");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let imagen = document.querySelector("#image")

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

    if (nombre.value == '') {
      errors.push('Escribe tu nombre')
    } else if (nombre.value.length < 2) {
      errors.push('Tu nombre debe tener más de 2 caracteres')
    }

    if (apellido.value == '') {
      errors.push('Escribe tu apellido')
    } else if (apellido.value.length < 2) {
      errors.push('Tu apellido debe tener más de 2 caracteres')
    }

    if (email.value == '') {
      errors.push('Escribe tu email')
    } else {
      validarEmail(email.value)
    }

    if (password.value == '') {
      errors.push('Escribe tu contraseña')
    } else if (password.value.length < 8) {
      errors.push('Tu contraseña debe tener más de 7 caracteres')
    }

    function validarImagen() {
      let extensions = /(.jpg|.jpeg|.png|.gif)$/i;
      let imagenPath = imagen.value;
      if (extensions.test(imagenPath)) {
        return
      } else {
        errors.push('Selecciona una imagen con formato permitido (.png/.jpg/.jpeg/.gif/)')
      }
    }
    validarImagen();

    if (errors.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector(".errores ul");
      errors.forEach(error => {
        ulErrores.innerHTML += `<li>${error}</li>`
      })
    }
  })
})