let boton = document.getElementById("p2");
let boton2= document.getElementById("okey0");
let boton3= document.getElementById("okey1");
function botones(){
 
    document.getElementById("bancomalvado").style.display="flex";
   
}

function botones2(){
document.getElementById("bancomalvado").style.display="none";
 document.getElementById("bonito").style.display="flex";
}

function botones3(){
document.getElementById("bonito").style.display="none";
 
}

boton.onclick = botones;
boton2.onclick =botones2;
boton3.onclick =botones3;
