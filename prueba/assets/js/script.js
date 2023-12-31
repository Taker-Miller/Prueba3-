//FORMULARIO  
var form = document.getElementById('formulario');
var editarButton = document.getElementById('editar');
var eliminarButton = document.getElementById('eliminar');
var guardarButton = document.getElementById('guardar');
var editarRegistroIndex = -1;
var eliminarRegistroIndex = -1;
var tabla = document.getElementById('tabla');
var registros = []; //el código establece referencias a elementos HTML específicos en el documento utilizando sus ID, 
                    //y crea una variable para almacenar registros

form.addEventListener('submit', function(event) {
  event.preventDefault();
  guardarDatos();
});

editarButton.addEventListener('click', function() {
  editarRegistro();
});

eliminarButton.addEventListener('click', function() {
  eliminarRegistro();
});

// el código establece eventos en diferentes elementos del documento HTML. 
//Cuando se produce una acción específica, como el envío del formulario, 
//hacer clic en un botón de edición o hacer clic en un botón de eliminación, 
//se ejecutan las funciones correspondientes para realizar operaciones relacionadas con los datos del formulario o los registros.

function guardarDatos() {
  // Obtener los valores del formulario
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var edad = document.getElementById('edad').value;
  var contrasena = document.getElementById('contrasena').value;
  var ciudad = document.querySelector('input[name="ciudad"]:checked');
  var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
  var genero = document.getElementById('genero').value;
  var correo = document.getElementById('correo').value;
  var robot = document.getElementById('robot').checked;

  // Validar los campos
  var camposValidos = validarCampos(nombre, apellido, edad, contrasena, ciudad, fechaNacimiento, genero, correo, robot);

  if (camposValidos) {
    // Crear objeto de registro
    var registro = {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      contrasena: contrasena,
      ciudad: ciudad.value,
      fechaNacimiento: fechaNacimiento,
      genero: genero,
      correo: correo,
      robot: robot
    };

    if (editarRegistroIndex !== -1) {
      // Editar un registro existente
      registros[editarRegistroIndex] = registro;
      editarRegistroIndex = -1;
      guardarButton.value = 'Guardar';
      editarButton.disabled = true;
      eliminarButton.disabled = true;
    } else {
      // Agregar un nuevo registro
      registros.push(registro);
    }

    // Guardar registros en el localStorage
    localStorage.setItem('registros', JSON.stringify(registros));

    // Limpiar el formulario
    limpiarFormulario();

    // Actualizar la tabla
    actualizarTabla();
  }
}

function validarCampos(nombre, apellido, edad, contrasena, ciudad, fechaNacimiento, genero, correo, robot) {
  limpiarErrores();

  var camposValidos = true;

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
  } else if (isNaN(edad)) {
    mostrarError('edad', 'El campo Edad debe ser numérico');
    camposValidos = false;
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

function validarCorreoElectronico(correo) {
  // Validación básica de formato de correo electrónico
  var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return correoRegex.test(correo);
}

function mostrarError(campo, mensaje) {
  var input = document.getElementById(campo);
  input.classList.add('error');

  var errorContainer = document.createElement('div');
  errorContainer.classList.add('error-message');
  errorContainer.innerText = mensaje;

  input.parentNode.insertBefore(errorContainer, input.nextSibling);
}

function limpiarErrores() {
  var errores = document.querySelectorAll('.error');

  errores.forEach(function(error) {
    error.classList.remove('error');
  });

  var errorMessages = document.querySelectorAll('.error-message');

  errorMessages.forEach(function(errorMessage) {
    errorMessage.parentNode.removeChild(errorMessage);
  });
}

function limpiarFormulario() {
  form.reset();
}

function actualizarTabla() {
  // Limpiar la tabla
  var tbody = document.querySelector('#tabla tbody');
  tbody.innerHTML = '';

  // Obtener los registros del localStorage
  var registrosGuardados = localStorage.getItem('registros');
  if (registrosGuardados) {
    registros = JSON.parse(registrosGuardados);

    // Llenar la tabla con los registros
    registros.forEach(function(registro, index) {
      var fila = document.createElement('tr');

      var nombreCell = document.createElement('td');
      nombreCell.innerText = registro.nombre;
      fila.appendChild(nombreCell);

      var apellidoCell = document.createElement('td');
      apellidoCell.innerText = registro.apellido;
      fila.appendChild(apellidoCell);

      var edadCell = document.createElement('td');
      edadCell.innerText = registro.edad;
      fila.appendChild(edadCell);

      var contrasenaCell = document.createElement('td');
      contrasenaCell.innerText = registro.contrasena;
      fila.appendChild(contrasenaCell);

      var ciudadCell = document.createElement('td');
      ciudadCell.innerText = registro.ciudad;
      fila.appendChild(ciudadCell);

      var fechaNacimientoCell = document.createElement('td');
      fechaNacimientoCell.innerText = registro.fechaNacimiento;
      fila.appendChild(fechaNacimientoCell);

      var generoCell = document.createElement('td');
      generoCell.innerText = registro.genero;
      fila.appendChild(generoCell);

      var correoCell = document.createElement('td');
      correoCell.innerText = registro.correo;
      fila.appendChild(correoCell);

      var robotCell = document.createElement('td');
      robotCell.innerText = registro.robot ? 'Sí' : 'No';
      fila.appendChild(robotCell);

      var accionesCell = document.createElement('td');
      var editarButton = document.createElement('button');
      editarButton.innerText = 'Editar';
      editarButton.addEventListener('click', function() {
        cargarRegistro(index);
      });
      accionesCell.appendChild(editarButton);

      var eliminarButton = document.createElement('button');
      eliminarButton.innerText = 'Eliminar';
      eliminarButton.addEventListener('click', function() {
        cargarRegistro(index);
        eliminarRegistro();
      });
      accionesCell.appendChild(eliminarButton);

      fila.appendChild(accionesCell);

      tbody.appendChild(fila);
    });
  }

  // Mostrar la tabla si hay registros
  if (registros.length > 0) {
    tabla.classList.remove('hidden');
  } else {
    tabla.classList.add('hidden');
  }
}

function cargarRegistro(index) {
  var registro = registros[index];

  // Llenar el formulario con los datos del registro
  document.getElementById('nombre').value = registro.nombre;
  document.getElementById('apellido').value = registro.apellido;
  document.getElementById('edad').value = registro.edad;
  document.getElementById('contrasena').value = registro.contrasena;
  document.getElementById(registro.ciudad).checked = true;
  document.getElementById('fecha_nacimiento').value = registro.fechaNacimiento;
  document.getElementById('genero').value = registro.genero;
  document.getElementById('correo').value = registro.correo;
  document.getElementById('robot').checked = registro.robot;

  // Habilitar los botones de editar y eliminar
  editarButton.disabled = false;
  eliminarButton.disabled = false;

  // Actualizar el valor del índice de registro a editar
  editarRegistroIndex = index;
  guardarButton.value = 'Actualizar';
}




function editarRegistro(index) {
  var registro = registros[index];

  document.getElementById('nombre').value = registro.nombre;
  document.getElementById('apellido').value = registro.apellido;
  document.getElementById('edad').value = registro.edad;
  document.getElementById('contrasena').value = registro.contrasena;
  document.getElementById(registro.ciudad).checked = true;
  document.getElementById('fecha_nacimiento').value = registro.fechaNacimiento;
  document.getElementById('genero').value = registro.genero;
  document.getElementById('correo').value = registro.correo;
  document.getElementById('robot').checked = registro.robot;

  editarRegistroIndex = index;
} //La función editarRegistro trabaja con un arreglo llamado registros, el cual contiene una lista de registros. 
  //El parámetro index que se pasa a la función indica el índice del registro específico que se desea editar en ese arreglo



function eliminarRegistro(index) {
  if (index === eliminarRegistroIndex) {
    // Eliminar registro
    registros.splice(index, 1);
    limpiarFormulario();
    eliminarRegistroIndex = -1;
  } else {
    // Marcar registro para eliminar
    var registro = registros[index];
    document.getElementById('nombre').value = registro.nombre;
    document.getElementById('apellido').value = registro.apellido;
    document.getElementById('edad').value = registro.edad;
    document.getElementById('contrasena').value = registro.contrasena;
    document.getElementById(registro.ciudad).checked = true;
    document.getElementById('fecha_nacimiento').value = registro.fechaNacimiento;
    document.getElementById('genero').value = registro.genero;
    document.getElementById('correo').value = registro.correo;
    document.getElementById('robot').checked = registro.robot;
    eliminarRegistroIndex = index;

    // Desactivar los campos de entrada
document.querySelectorAll('input').forEach(function(input) {
  input.disabled = true;
});
  }

  actualizarTabla();
}

// Limpiar el formulario
limpiarFormulario();

// Activar los campos de entrada
document.querySelectorAll('input').forEach(function(input) {
  input.disabled = false;
});

// Volver a activar los campos de entrada
activarCampos();

function actualizarTabla() {
  var tbody = document.querySelector('#tabla tbody');
  tbody.innerHTML = '';

  for (var i = 0; i < registros.length; i++) {
    var registro = registros[i];

    var row = document.createElement('tr');
    var nombreCell = document.createElement('td');
    var apellidoCell = document.createElement('td');
    var edadCell = document.createElement('td');
    var contrasenaCell = document.createElement('td');
    var ciudadCell = document.createElement('td');
    var fechaNacimientoCell = document.createElement('td');
    var generoCell = document.createElement('td');
    var correoCell = document.createElement('td');
    var robotCell = document.createElement('td');
    var accionesCell = document.createElement('td');
    var editarButton = document.createElement('button');
    var eliminarButton = document.createElement('button');

    nombreCell.textContent = registro.nombre;
    apellidoCell.textContent = registro.apellido;
    edadCell.textContent = registro.edad;
    contrasenaCell.textContent = registro.contrasena;
    ciudadCell.textContent = registro.ciudad;
    fechaNacimientoCell.textContent = registro.fechaNacimiento;
    generoCell.textContent = registro.genero;
    correoCell.textContent = registro.correo;
    robotCell.textContent = registro.robot ? 'Sí' : 'No';

    editarButton.textContent = 'Editar';
    editarButton.addEventListener('click', (function(index) {
      return function() {
        editarRegistro(index);
      }
    })(i)); //la función actualizarTabla recorre el arreglo registros y crea filas y celdas en una tabla HTML con los datos de cada registro. 
            //También añade un botón de editar para cada registro que invoca la función editarRegistro con el índice correspondiente.

    eliminarButton.textContent = eliminarRegistroIndex === i ? 'Eliminar Confirmar' : 'Eliminar';
    eliminarButton.addEventListener('click', (function(index) {
      return function() {
        eliminarRegistro(index);
      }
    })(i));

    accionesCell.appendChild(editarButton);
    accionesCell.appendChild(eliminarButton);

    row.appendChild(nombreCell);
    row.appendChild(apellidoCell);
    row.appendChild(edadCell);
    row.appendChild(contrasenaCell);
    row.appendChild(ciudadCell);
    row.appendChild(fechaNacimientoCell);
    row.appendChild(generoCell);
    row.appendChild(correoCell);
    row.appendChild(robotCell);
    row.appendChild(accionesCell);

    tbody.appendChild(row);
  } //se encarga de crear y configurar los botones de editar y eliminar en cada fila de la tabla generada por la función actualizarTabla. 
    //Además, se establecen los eventos de clic para cada botón, 
    //invocando las funciones correspondientes (editarRegistro y eliminarRegistro) con los índices adecuados.

  if (registros.length > 0) {
    document.getElementById('tabla').classList.remove('hidden');
  } else {
    document.getElementById('tabla').classList.add('hidden');
  }
}

  // Eliminar el registro del arreglo
  registros.splice(editarRegistroIndex, 1);

  // Guardar registros en el localStorage
  localStorage.setItem('registros', JSON.stringify(registros));

  // Limpiar el formulario
  limpiarFormulario();

  // Actualizar la tabla
  actualizarTabla();


// Variables para el seguimiento de los registros
var editarRegistroIndex = -1;

// Cargar registros guardados en el localStorage
actualizarTabla();

function cambiarContraste() {
    var body = document.body;
    body.classList.toggle("high-contrast");
  }
  
