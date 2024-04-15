if(window.history.length < 4){ //enlace directo -4
    if(localStorage.getItem('anterior').includes('Recetas.html') == false){
    
        let b1 = document.getElementById('e1');  //el boton copiar se avilita
        b1.style.display="inline";
        localStorage.setItem('anterior',"")

    } else if(localStorage.getItem('anterior').includes('Recetas.html') == true){
        let b1 = document.getElementById('e2');  //el boton copiar se avilita
        b1.style.display="inline";
    }
    
} else if(window.history.length > 3){ //varios enlaces +3
    
        if(localStorage.getItem('anterior').includes('Recetas.html') == false){
    
            let b1 = document.getElementById('e1');  //el boton copiar se avilita
            b1.style.display="inline";
            localStorage.setItem('anterior',"")
    
        } else if(localStorage.getItem('anterior').includes('Recetas.html') == true){
            let b1 = document.getElementById('e2');  //el boton copiar se avilita
            b1.style.display="inline";
        }
}

function atras(){ 
    window.history.back(); 
    localStorage.setItem('anterior',"")
}

function copiar(){ localStorage.setItem('anterior',window.location.href); }
