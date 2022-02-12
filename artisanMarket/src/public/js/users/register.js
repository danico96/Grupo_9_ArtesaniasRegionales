window.addEventListener("load", function () {

  let formulario = document.querySelector("form.form-register");

  formulario.addEventListener("submit", function (e) {
    let errors = [];

    let nombre = document.querySelector("#name");
    if (nombre.value = "") {
      errors.push("El campo nombre está vacío");
    } else if (/^\s+$/.test(nombre.value) || nombre.value.length < 2) {
      errors.push("El campo nombre debe tener más de 2 caracteres");
    }

    let apellido = document.querySelector("#lastname")
    if (apellido.value = "") {
      errors.push("El campo apellido está vacío");
    } else if (/^\s+$/.test(apellido.value) || apellido.value.length < 2) {
      errors.push("El campo apellido debe tener más de 2 caracteres");
    }

    let email = document.querySelector("#email")
    if (email.value = "") {
      errors.push("El campo email está vacío");
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      errors.push("Ingrese un email válido");
    }

    let password = document.querySelector("#password")
    if (password.value = "") {
      errors.push("El campo password está vacío");
    } else if (password.value.length < 8) {
      errors.push("El password debe tener más de 7 caracteres");
    }

    let image = document.querySelector("#image")
    if (!(/\.(jpg|png|gif)$/i).test(image.name)) {
      errors.push('Formato de imagen no permitido');
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