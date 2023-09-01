//Callback: funcion secundaria que se ejecuta despues de la funcion principal = callback

//Declarando la funcion principal
function funcionPrincipal (usuario, contrasena, funcionSecundaria){
    setTimeout(function(){

        //logica que implementa la funcion principal (validaro usuario y contraseña)
          //validar el usuario y contraseña

          if(usuario == "admin" && contrasena == "admin"){
            estadoValidacion = true
            //Llamando funcion secundaria (callback)
            funcionSecundaria(estadoValidacion)
          }else{
            estadoValidacion = false
            funcionSecundaria(estadoValidacion)
          }       
    }, 2000)
}


//Llamar la funcion principal
funcionPrincipal("admin", "admin", function(estado){
    if(estado === true){
        console.log("Bienvenido al netflix pa")
    }else{
        console.log("No tienes acceso, paga che")
    }
}) //Se declara la funcion dos