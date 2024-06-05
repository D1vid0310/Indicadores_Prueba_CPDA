function validarForm(forma = false) {
  var usuario = forma.usuario;
  if (usuario.value == "" || usuario.value == "Escribir Usuario") {
    alert("Debe escribir un nombre de usuario");
    usuario.focus();
    usuario.select();
    return false;
  }

  var pass = forma.pass;
  if (pass.value == "" || pass.value.length < 3) {
    alert("La contraseña debe ser mayor de 3 caractewres");
    pass.focus();
    pass.select();
    return false;
  }
  var tecno = forma.tecno;
  var checkS = false;
  for (var i = 0; i < tecno.length; i++) {
    if (tecno[i].checked) {
      checkS = true;
    }
  }

  if (!checkS) {
    alert("Debe seleccionar minimo una Tecnologia");
    return false;
  }

  var genero = forma.genero;
  var radioS = false;

  for (var i = 0; i < genero.length; i++) {
    if (genero[i].checked) {
      radioS = true;
    }
  }

  if (!radioS) {
    alert("Debe seleccionar un Genero ");
    return false;
  }

  var ocupacion = forma.ocupacion;
  if (ocupacion.value == "") {
    alert("Debe seleccionar una ocupacion");
    return false;
  }

  if ((forma = true)) {
    aler("Formulario valida, enviando datos al servidor");
  }
}
