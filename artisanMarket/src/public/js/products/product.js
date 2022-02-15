window.addEventListener("load", function () {
  let formulario = document.querySelector("form.form-product");
  let nombreProducto = document.querySelector(".productName");
  let descripcion = document.querySelector(".description");
  let cantidad = document.querySelector(".quantity");
  let precio = document.querySelector(".price");
  let imagen = document.querySelector(".image");

  formulario.addEventListener("submit", function (e) {
    let errors = [];

    if (nombreProducto.value == ''){
      errors.push('Ingrese el nombre del producto');
    } else if(nombreProducto.value.length < 5){
      errors.push('El nombre debe contener al menos 5 caracteres');
    }

    if (descripcion.value == ''){
      errors.push('Ingrese una descripción del producto')
    } else if (descripcion.value.length < 20){
      errors.push('La descripción debe tener al menos 20 caracteres')
    }

    if (cantidad.value == '') {
      errors.push('Ingrese una cantidad')
    }

    if(precio.value == ''){
      errors.push('Defina el precio del producto')
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