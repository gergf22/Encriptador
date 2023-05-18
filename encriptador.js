
var texto = document.getElementById("texto");
var botonEncriptar = document.getElementById("encriptar");
var botonDesencriptar = document.getElementById("desencriptar");
var imagenEncriptador = document.getElementById("imagen-encriptador");
var textoEncriptador = document.getElementById("texto-encriptador");
var textoResultado = document.getElementById("texto-resultado");
var divResultado = document.getElementById("div-resultado");
var botonCopiar =document.getElementById("copiar");
var letras = ["e","i","a","o","u"];
var frases = ["enter", "imes", "ai","ober","ufat"];

function mostrarResulado() {
    imagenEncriptador.style.display = "none";
    textoEncriptador.style.display = "none";
    botonCopiar.style.display = "block";
    divResultado.style.display = "block";
}

function encriptador (x,y){
    var posicion = 0;
    var textoPorEncriptar = texto.value;
    while (posicion < x.length){
        var textoEncriptado = textoPorEncriptar.replaceAll(x[posicion],y[posicion]);
        posicion = posicion +1;
        textoPorEncriptar = textoEncriptado
    };
    mostrarResulado();
    textoResultado.innerHTML = textoEncriptado;  
    texto.value="";
    return texto;    
    
}

function encriptar(){
    encriptador(letras,frases);
}

function desencriptar() {
    encriptador(frases,letras);    
}

function copiar() {
    var text = textoResultado.textContent;
 
    navigator.clipboard.writeText(text)
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;











/* function encriptardor() {
   var textoPorEncriptar = texto.value
    function encriptarE() {
        textoEncriptadoE = textoPorEncriptar.replaceAll("e","enter");
        return textoEncriptadoE;
    };
    encriptarE();
    function encriptarI() {
        textoEncriptadoI = textoEncriptadoE.replaceAll("i","imes");
        return textoEncriptadoI
    };
    encriptarI();
    function encriptarA() {
        textoEncriptadoA = textoEncriptadoI.replaceAll("a","ai");
        return textoEncriptadoA
    };
    encriptarA();
    function encriptarO() {
        textoEncriptadoO = textoEncriptadoA.replaceAll("o","ober");
        return textoEncriptadoO
    };
    encriptarO();
    function encriptarU() {
        textoEncriptado = textoEncriptadoO.replaceAll("u","ufat");
        return textoEncriptado
    };
    encriptarU();
    mostrarResulado();
    textoResultado.innerHTML = textoEncriptado;  
    texto.value="";
    return texto;
}


function Desencriptardor() {
    var textoPorDesencriptar = texto.value
     function desencriptarE() {
         textoEncriptadoE = textoPorDesencriptar.replaceAll("enter","e");
         return textoEncriptadoE;
     };
     desencriptarE();
     function desencriptarI() {
         textoEncriptadoI = textoEncriptadoE.replaceAll("imes","i");
         return textoEncriptadoI
     };
     desencriptarI();
     function desencriptarA() {
         textoEncriptadoA = textoEncriptadoI.replaceAll("ai","a");
         return textoEncriptadoA
     };
     desencriptarA();
     function desencriptarO() {
         textoEncriptadoO = textoEncriptadoA.replaceAll("ober","o");
         return textoEncriptadoO
     };
     desencriptarO();
     function desencriptarU() {
         textoDesencriptado = textoEncriptadoO.replaceAll("ufat","u");
         return textoDesencriptado
     };
     desencriptarU();
     mostrarResulado();
     textoResultado.innerHTML = textoDesencriptado;   
     texto.value="";
     return texto; 
     
} */
