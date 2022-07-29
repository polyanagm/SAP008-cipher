import cipher from './cipher.js';
const textInput = document.getElementById("senha");

textInput.addEventListener("keypress",function(e) {

    if(!checkChar(e)){
        e.preventDefault()
    }
});
function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = "[A-Z]";

    if(char.match(pattern)){

    return true;
    }
}

function codifica(){
     let senha = document.getElementById("senha").value
     senha = senha.toUpperCase()
     const deslocamento = parseInt(document.getElementById("deslocamento").value);
     const resultado = cipher.encode(deslocamento, senha);
     document.getElementById("senhapronta").innerHTML = "Sua senha codificada/decodificada irá aparecer aqui: " + '"' + resultado + '"'
}
 
document.getElementById("codifica").addEventListener("click", codifica);

function decode(){
     let senha = document.getElementById("senha").value
     senha = senha.toUpperCase()
     const deslocamento = parseInt(document.getElementById("deslocamento").value);
     const resultado = cipher.decode(deslocamento,senha);
     document.getElementById("senhapronta").innerHTML = "Sua senha codificada/decodificada irá aparecer aqui: " + '"' + resultado + '"'
}

document.getElementById("decodifica").addEventListener("click", decode);