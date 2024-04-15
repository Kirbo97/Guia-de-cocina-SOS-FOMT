
if(window.history.length < 4){ //enlace directo -4

    let b2 = document.getElementById('a1');  //el boton copiar se avilita
    b2.style.display="inline";

} else if(window.history.length > 3){ //varios enlaces +3
    let b2 = document.getElementById('a2');  //el boton copiar se avilita
    b2.style.display="inline";
}

function usar(perfil){ //esta funcion es para cuando es enlaces directo
    let ant = document.getElementById('a1'); 
        if(perfil == "can"){ ant.setAttribute("href","../../Otros/Casamiento.html"); }
        if(perfil == "ald") { ant.setAttribute("href","../../Aldeanos.html"); }
        if(perfil == "ani") { ant.setAttribute("href","../../Paginas/Animales.html"); } 
        if(perfil == "even") { ant.setAttribute("href","../../Paginas/Eventos.html"); }
        if(perfil == "mat") { ant.setAttribute("href","../../Paginas/Aldeanos.html"); }
        if(perfil == "coci") { ant.setAttribute("href","../../Paginas/Cocina.html"); }
        if(perfil == "mina") { ant.setAttribute("href","../../Paginas/Mineria.html"); }
}