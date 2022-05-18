function validacionFormulario()
{
      let nombre = document.forms["formulario"]["nombre"].value;
      if (nombre == "" ) {
          alert("El nombre no puede estar vacío.");
       
          return false;
      }
     
  var letters = /^[A-Za-z]+$/;
   if(!nombre.match(letters))
   {
   alert('Por favor, utilice sólo letras en este campo.');
   return false;
    }

 
   
        let apellido = document.forms["formulario"]["apellido"].value;
        if (apellido == "") {
          alert("El apellido no puede estar vacío.");
          return false;
        }


          if(!apellido.match(letters))
          {
          alert('Por favor, utilice sólo letras en este campo.');
          return false;
           }


        let correo = document.forms["formulario"]["correo"].value;
        if (correo == "") {
          alert("El e-mail no puede estar vacío.");
          return false;
        }

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!correo.match(mailformat))
{
alert("Por favor, ingrese un e-mail válido.");
return false;
}

let tel = document.forms["formulario"]["telefono"].value;
if (tel == "") {
  alert("El teléfono no puede estar vacío.");
  return false;
}
         
var phoneno = /^\d{11}$/;
  if(!tel.match(phoneno))
        {
        alert("Por favor, ingrese un número de teléfono válido (11 dígitos).");
        return false;
        }


   alert("¡Muchas gracias por tu contacto! Te responderemos a la brevedad.");   
  
  }


      
    


