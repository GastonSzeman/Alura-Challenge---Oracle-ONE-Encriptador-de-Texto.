function encriptar(){
    var palabra = document.getElementById("entrada-1").value.toLowerCase();
    palabraEncriptada = palabra.replace(/e/igm,"enter");
    palabraEncriptada = palabraEncriptada.replace(/i/igm,"imes");
    palabraEncriptada = palabraEncriptada.replace(/a/igm,"ai");
    palabraEncriptada = palabraEncriptada.replace(/o/igm,"ober");
    palabraEncriptada = palabraEncriptada.replace(/u/igm,"ufat");
       
    alert("Resultado de la encriptacion: " + palabraEncriptada);
}
function desencriptar(){
    var palabra = document.getElementById("entrada-1").value.toLowerCase();
    palabraDesEncriptada = palabra.replace(/enter/igm,"e");
    palabraDesEncriptada = palabraDesEncriptada.replace(/imes/igm,"i");
    palabraDesEncriptada = palabraDesEncriptada.replace(/ai/igm,"a");
    palabraDesEncriptada = palabraDesEncriptada.replace(/ober/igm,"o");
    palabraDesEncriptada = palabraDesEncriptada.replace(/ufat/igm,"u");
    alert("Resultado de la desencriptacion: " + palabraDesEncriptada);
}
