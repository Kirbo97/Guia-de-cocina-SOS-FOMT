let nav1 = document.getElementById('esp1').querySelector('details');  //el boton copiar se avilita
let nav2 = document.getElementById('esp2').querySelector('details');  //el boton copiar se avilita
let nav3 = document.getElementById('esp3').querySelector('details');  //el boton copiar se avilita
let nav4 = document.getElementById('esp4').querySelector('details'); //el boton copiar se avilita
let nav5 = document.getElementById('esp5').querySelector('details');  //el boton copiar se avilita

function val1(){
    if(nav1.open==false){
        nav2.open=false;
        nav3.open=false;
        nav4.open=false;
        nav5.open=false;
    }
}

function val2(){
    if(nav2.open==false){
        nav1.open=false;
        nav3.open=false;
        nav4.open=false;
        nav5.open=false;
    }
}

function val3(){
    if(nav3.open==false){
        nav1.open=false;
        nav2.open=false;
        nav4.open=false;
        nav5.open=false;
    }
}

function val4(){
    if(nav4.open==false){
        nav1.open=false;
        nav2.open=false;
        nav3.open=false;
        nav5.open=false;
    }
}

function val5(){
    if(nav5.open==false){
        nav1.open=false;
        nav2.open=false;
        nav3.open=false;
        nav4.open=false;
    }
}