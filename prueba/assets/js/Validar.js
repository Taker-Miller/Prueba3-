}function validarCampos() {
    limpiarErrores();
    var camposValidos = true;
  
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var contrasena = document.getElementById('contrasena').value;
    var ciudad = document.querySelector('input[name="ciudad"]:checked');
    var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    var genero = document.getElementById('genero').value;
    var correo = document.getElementById('correo').value;
    var robot = document.getElementById('robot').checked;
//La función validarCampos realiza una serie de validaciones en los campos del formulario del html

  
    if (nombre.trim() === '') {
      mostrarError('nombre', 'El campo Nombre es obligatorio');
      camposValidos = false;
    }
//verifica si el campo "nombre" del formulario está vacío o solo contiene espacios en blanco. Si es así, muestra un mensaje de error 
//y establece la variable camposValidos en false, lo que indica que el formulario no es válido debido a este campo.

    if (apellido.trim() === '') {
      mostrarError('apellido', 'El campo Apellido es obligatorio');
      camposValidos = false;
    }
//verifica si el campo "apellido" del formulario está vacío o solo contiene espacios en blanco. Si es así, muestra un mensaje de error 
//y establece la variable camposValidos en false, indicando que el formulario no es válido debido a este campo.
  
    if (edad.trim() === '') {
      mostrarError('edad', 'El campo Edad es obligatorio');
      camposValidos = false;
    } else {
      var edadNum = parseInt(edad);
      if (isNaN(edadNum) || edadNum < 0) {
        mostrarError('edad', 'El campo Edad debe ser un número positivo');
        camposValidos = false;
      }
    }
  
    if (contrasena.trim() === '') {
      mostrarError('contrasena', 'El campo Contraseña es obligatorio');
      camposValidos = false;
    }
  
    if (!ciudad) {
      mostrarError('ciudad', 'Debe seleccionar una Ciudad');
      camposValidos = false;
    }
  
    if (fechaNacimiento.trim() === '') {
      mostrarError('fecha_nacimiento', 'El campo Fecha de Nacimiento es obligatorio');
      camposValidos = false;
    }
  
    if (genero.trim() === '') {
      mostrarError('genero', 'Debe seleccionar un Género');
      camposValidos = false;
    }
  
    if (correo.trim() === '') {
      mostrarError('correo', 'El campo Correo Electrónico es obligatorio');
      camposValidos = false;
    } else if (!validarCorreoElectronico(correo)) {
      mostrarError('correo', 'El campo Correo Electrónico no es válido');
      camposValidos = false;
    }
  
    if (!robot) {
      mostrarError('robot', 'Debe marcar la opción No soy un robot');
      camposValidos = false;
    }
  
    return camposValidos;
  }
//verifica si la opción "No soy un robot" está marcada. 
//Si no está marcada, se muestra un mensaje de error y se establece la variable camposValidos en false. 
//Al final, la función validarCampos
//devuelve el valor de camposValidos, que indicará si todos los campos pasaron la validación o si se encontraron errores. 


// Fuente
var changeFuente = () => {
  let btn = document.getElementById("btnFuente");
  let estado = btn.value;
  if (estado == '0') {
      btn.value = '1';
      let elements = document.getElementsByClassName("small");
      const largo = elements.length;
      for (let index = 0; index < largo; index++) {
          const element = elements[0];
          element.classList.add("medium");
          element.classList.remove("small");
      } //cambia el valor del botón "btnFuente" a '1' si el valor actual es '0' y realiza cambios en la clase de los elementos que tienen la clase "small", cambiándola a "medium"
        //en resumen cambia el tamaño de la fuente de texto.

  } else if (estado == '1') {
      btn.value = '2';
      let elements = document.getElementsByClassName("medium");
      const largo = elements.length;
      for (let index = 0; index <largo; index++) {
          const element = elements[0];
          element.classList.add("large");
          element.classList.remove("medium");
      } //cambia el valor del botón "btnFuente" a '2' si el valor actual es '1' y realiza cambios en la clase de los elementos que tienen la clase "medium", cambiándola a "large"
        //cambiar el tamaño de la fuente de texto a un tamaño mas grande

  } else if (estado == '2') {
      btn.value = '0';
      let elements = document.getElementsByClassName("large");
      const largo = elements.length;
      for (let index = 0; index < largo; index++) {
          const element = elements[0];
          element.classList.add("small");
          element.classList.remove("large");
      }
    }
} //cambia el valor del botón "btnFuente" a '0' si el valor actual es '2' y realiza cambios en la clase de los elementos que tienen la clase "large", cambiándola a "small"
  //esté diseñada para volver al tamaño de fuente original (pequeño) 

let btn = document.getElementById("btnFuente");
  let estado = btn.value;
  
  if (estado == '0') {
      btn.value = '1';
      let elements = document.getElementsByClassName("box");
      const largo = elements.length;
      
      for (let index = 0; index < largo; index++) {
          const element = elements[index];
          element.classList.add("medium");
          element.classList.remove("small");
      } //obtiene el valor de un botón con id "btnFuente" y realiza cambios en la clase de los elementos que tienen la clase "box", agregando la clase "medium" y eliminando la clase "small". Además, actualiza el valor del botón a '1'.
        //cambia el aspecto visual de elementos box  al hacer clic en el botón "btnFuente"
  } else if (estado == '1') {
      btn.value = '2';
      let elements = document.getElementsByClassName("box");
      const largo = elements.length;
      
      for (let index = 0; index < largo; index++) {
          const element = elements[index];
          element.classList.add("large");
          element.classList.remove("medium");
      } // cambia el valor del botón "btnFuente" a '2' si el valor actual es '1' y realiza cambios en la clase de los elementos que tienen la clase "box", agregando la clase "large" y eliminando la clase "medium".
        //cambia el aspecto visual de elementos box cuando se hace clic en el botón "btnFuente"
  } else if (estado == '2') {
      btn.value = '0';
      let elements = document.getElementsByClassName("box");
      const largo = elements.length;
      
      for (let index = 0; index < largo; index++) {
          const element = elements[index];
          element.classList.add("small");
          element.classList.remove("large");
      } //cambia el valor del botón "btnFuente" a '0' si el valor actual es '2' y realiza cambios en la clase de los elementos que tienen la clase "box", agregando la clase "small" y eliminando la clase "large".
        //vuelve al aspecto visual original de elementos "box" cuando se hace clic en el botón "btnFuente" 
  }
document.getElementById("btnFuente").addEventListener("click", changeFuente); //cuando se haga clic en el elemento con el id "btnFuente", se llamará a la función changeFuente

function validarCampos() {
  limpiarErrores();
  var camposValidos = true;

  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var edad = document.getElementById('edad').value;
  var contrasena = document.getElementById('contrasena').value;
  var ciudad = document.querySelector('input[name="ciudad"]:checked');
  var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
  var genero = document.getElementById('genero').value;
  var correo = document.getElementById('correo').value;
  var robot = document.getElementById('robot').checked;
  //obtiene los valores de varios campos del formulario y los almacena en variables correspondientes. 
  //Además, establece una variable camposValidos como verdadera y se utiliza para rastrear si todos los campos cumplen con los requisitos de validación. 

  if (nombre.trim() === '') {
    mostrarError('nombre', 'El campo Nombre es obligatorio');
    camposValidos = false;
  }

  if (apellido.trim() === '') {
    mostrarError('apellido', 'El campo Apellido es obligatorio');
    camposValidos = false;
  }

  if (edad.trim() === '') {
    mostrarError('edad', 'El campo Edad es obligatorio');
    camposValidos = false;
  } else {
    var edadNum = parseInt(edad);
    if (isNaN(edadNum) || edadNum < 0) {
      mostrarError('edad', 'El campo Edad debe ser un número positivo');
      camposValidos = false;
    }
  }

  if (contrasena.trim() === '') {
    mostrarError('contrasena', 'El campo Contraseña es obligatorio');
    camposValidos = false;
  }

  if (!ciudad) {
    mostrarError('ciudad', 'Debe seleccionar una Ciudad');
    camposValidos = false;
  }

  if (fechaNacimiento.trim() === '') {
    mostrarError('fecha_nacimiento', 'El campo Fecha de Nacimiento es obligatorio');
    camposValidos = false;
  }

  if (genero.trim() === '') {
    mostrarError('genero', 'Debe seleccionar un Género');
    camposValidos = false;
  }

  if (correo.trim() === '') {
    mostrarError('correo', 'El campo Correo Electrónico es obligatorio');
    camposValidos = false;
  } else if (!validarCorreoElectronico(correo)) {
    mostrarError('correo', 'El campo Correo Electrónico no es válido');
    camposValidos = false;
  }

  if (!robot) {
    mostrarError('robot', 'Debe marcar la opción No soy un robot');
    camposValidos = false;
  }

  return camposValidos;
}

//realiza validaciones específicas para cada campo del formulario y muestra mensajes de error correspondientes 
//si los campos no cumplen con los requisitos. 
//Además, utiliza la variable camposValidos para llevar un registro global de si todos los campos son válidos.


