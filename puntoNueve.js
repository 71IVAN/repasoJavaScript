//Declarar funcion principal

function crearPadawan(nombre,planeta,altura,edad,clasificarPadawan){
    setTimeout(function(){
        //Logica de la funcion principal
        let padawan = {
            nEstudiante: nombre,
            pEstudiante: planeta,
            aEstudiante: altura,
            eEstudiante: edad
        }

        //Llamando funcion callback
        clasificarPadawan(padawan)
    },2500)
}

//Llamando la funcion principal
crearPadawan("mauricio", "drogalandia", 1.75, 27, function(padawantus){
    if(padawantus.eEstudiante < 15){
        console.log(`${padawantus.nEstudiante} tienes ${padawantus.eEstudiante} entonces iras a la clase manejo de la fuerza`)
    }else{
        console.log(`${padawantus.nEstudiante} tienes ${padawantus.eEstudiante} entonces iras a la clase manejo del sable de luz`)
    }
})