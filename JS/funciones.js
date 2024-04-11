if(window.history.length < 4){
    let b2 = document.getElementById('a1');  //el boton copiar se avilita
    b2.style.display="inline";
} else if(window.history.length > 3){
    let b2 = document.getElementById('a2');  //el boton copiar se avilita
    b2.style.display="inline";
}

function usar(perfil){
    let ant = document.getElementById('a1'); //Creo una coneccion a la etiqueta con la ID
        if(perfil == "can"){ ant.setAttribute("href","../../Otros/Casamiento.html"); }
        if(perfil == "ald") { ant.setAttribute("href","../../Aldeanos.html"); }
}