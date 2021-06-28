function verificarRespuestasTema1(){
    var total = 10;
    var puntos = 0;

    var myform1 = document.forms["preguntastema1"];
    var respuestas = ["a", "c", "a", "d", "c","a", "c", "a", "d", "c"];

    for(var i=1; i <= total; i++){
        if(myform1["p" + i].value === null || myform1["p" + i].value === ""){

            alert("Por favor responde la pregunta:" + i);
            return false;

        }else{
            if(myform1["p" + i].value === respuestas[i-1]){
                puntos+=10;
            }
        }

    }
    var resultado = document.getElementById("puntuacion");

    resultado.innerHTML = "<h3>Tu puntaje: <span> "+ puntos + "</span> </h3>";
    return false;
}