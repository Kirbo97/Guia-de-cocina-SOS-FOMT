function copiar(){
    var urlActual = window.location.href; // se usa para acceder a url actual
    localStorage.setItem('anterior',urlActual); //guarda el valor 
}

function usar(){
    var accederAnterior = ''; //inicializa la variable que se usara para obtener el dato
    accederAnterior = localStorage.getItem('anterior'); //acceder al valor 
    let anterior = document.getElementById('atras'); //La imagen cambia
    anterior.setAttribute("href",accederAnterior);
}