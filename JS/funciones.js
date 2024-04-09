function copiar(){
    var urlActual = window.location.href; // se usa para acceder a url actual
    localStorage.setItem('anterior',urlActual); //guarda el valor 
}


function usar(perfil){
    var accederAnterior = ''; //inicializa la variable que se usara para obtener el dato
    accederAnterior = localStorage.getItem('anterior'); //acceder al valor 
    let anterior = document.getElementById('atras'); //mi variable tendra una instancia de la etiqueta con la id

    if(accederAnterior == window.location.href){

        if(perfil == "can"){ anterior.setAttribute("href","../../Otros/Casamiento.html"); } else

        if(perfil == "ald"){ anterior.setAttribute("href","../../Aldeanos.html"); }

    } else { 
        anterior.setAttribute("href",accederAnterior); 
    }
}
