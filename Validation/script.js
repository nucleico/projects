const form = document.querySelector('button');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const usuario = document.querySelector('#usuario');
const mail = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('click', function (e) {
  e.preventDefault();

  validarInputs();
});

const validarInputs = () => {
  const nombreValue = nombre.value.trim();
  const apellidoValue = apellido.value.trim();
  const usuarioValue = usuario.value.trim();
  const mailValue = mail.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  let validados = {
    nombre: false,
    apellido: false,
    usuario: false,
    mail: false,
    password: false,
    password2: false,
  };

  if (nombreValue === '') {
    marcarError(nombre, 'El nombre no puede estar vacío');
    validados.nombre = false;
  } else {
    marcarCorrecto(nombre);
    validados.nombre = true;
  }

  if (apellidoValue === '') {
    marcarError(apellido, 'El apellido no puede estar vacío');
    validados.apellido = false;
  } else {
    marcarCorrecto(apellido);
    validados.apellido = true;
  }

  if (usuarioValue === '') {
    marcarError(usuario, 'El usuario no puede estar vacío');
    validados.usuario = false;
  } else {
    marcarCorrecto(usuario);
    validados.usuario = true;
  }

  if (mailValue === '') {
    marcarError(mail, 'El mail no puede estar vacío');
    validados.mail = false;
  } else if (!isEmail(mailValue)) {
    marcarError(mail, 'El mail no es válido');
    validados.mail = false;
  } else {
    marcarCorrecto(mail);
    validados.mail = true;
  }

  if (passwordValue === '') {
    marcarError(password, 'El password no puede estar vacío');
    validados.password = false;
  } else if (passwordValue.length < 8) {
    marcarError(password, 'Al menos 8 caracteres');
    validados.password = false;
  } else if (!contieneNumero(passwordValue)) {
    marcarError(password, 'Tiene que incluir un número');
    validados.password = false;
  } else {
    marcarCorrecto(password);
    validados.password = true;
  }

  if (password2Value === '') {
    marcarError(password2, 'El password no puede estar vacío');
    validados.password2 = false;
  } else if (passwordValue.length < 8) {
    marcarError(password2, 'Al menos 8 caracteres');
    validados.password2 = false;
  } else if (!contieneNumero(password2Value)) {
    marcarError(password2, 'Tiene que incluir un número');
    validados.password2 = false;
  } else if (password2Value !== passwordValue) {
    marcarError(password2, 'Los passwords no coinciden');
    validados.password2 = false;
  } else {
    marcarCorrecto(password2);
    validados.password2 = true;
  }

  if (
    validados.nombre &&
    validados.apellido &&
    validados.usuario &&
    validados.password &&
    validados.mail &&
    validados.password2
  ) {
    alert('Usuario registrado con éxito!');
  }
};

const marcarError = (input, mensaje) => {
  const eachInput = input.parentElement;
  eachInput.className = 'eachInput error';
  const eachInputSmall = eachInput.querySelector('small');
  eachInputSmall.style.visibility = 'visible';
  eachInputSmall.textContent = mensaje;
};

const marcarCorrecto = (input) => {
  const eachInput = input.parentElement;
  eachInput.className = 'eachInput success';
  const eachInputSmall = eachInput.querySelector('small');
  eachInputSmall.style.visibility = 'hidden';
};

const contieneNumero = (password) => {
  return /\d/.test(password);
};

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
