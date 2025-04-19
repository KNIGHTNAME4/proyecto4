let boton = document.getElementById("p2");
let boton2= document.getElementById("okey0");
let boton3= document.getElementById("okey1");
let boton4=document.getElementById("pd");
let boton5=document.getElementById("okey3");


function botones(){
 
    document.getElementById("bancomalvado").style.display="flex";
    document.getElementById("p2").style.pointerEvents="none";
   
}

function botones2(){
document.getElementById("bancomalvado").style.display="none";
 document.getElementById("bonito").style.display="flex";
 document.getElementById("p2").style.pointerEvents="none";
   
}

function botones3(){
document.getElementById("bonito").style.display="none";
document.getElementById("p2").style.pointerEvents="auto";
   
}
 function botones4(){

 
 

}
function botones5(){
document.getElementById("apresurado").style.display="none";
}
function consola(){

    let nombreusu=document.getElementById('nombre1').value.trim();
    console.log(nombreusu);
 if(nombreusu ===""){
document.getElementById("apresurado").style.display="flex";
     console.log(nombreusu.trim());
 } else{
document.getElementById("listo").style.display="flex";
  document.getElementById('bb').innerText=nombreusu;
 }

}
function botonesfinal(){
    document.getElementById("listo").style.display="none";
}

boton.onclick = botones;
boton2.onclick =botones2;
boton3.onclick =botones3;
boton4.onclick = botones4;
boton5.onclick = botones5;
document.getElementById("mandar").onclick=consola;
document.getElementById("okey4").onclick=botonesfinal;
