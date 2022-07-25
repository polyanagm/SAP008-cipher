import cipher from './cipher.js';

let senha = document.getElementById("senha");
let btnCodificar = document.getElementById("codifica");
let btnDecodifica = document.getElementById("decodifica");
let deslocamento = document.getElementById("deslocamento");
let senhapronta = document.getElementById("senhapronta");

function codifica(){
     let senha = document.getElementById("senha").value
     senha = senha.toUpperCase()
     let result = ""
     let deslocamento = parseInt(document.getElementById("deslocamento").value);
     let resultado = cipher.encode(deslocamento, senha);
     document.getElementById("senhapronta").innerHTML = "Sua senha criptografada irá aparecer aqui: " + '"' + resultado + '"'
}
 
document.getElementById("codifica").addEventListener("click", codifica);

function decode(){
     let senha = document.getElementById("senha").value
     senha = senha.toUpperCase()
     let result = ""
     let deslocamento = parseInt(document.getElementById("deslocamento").value);
     let resultado = cipher.decode(deslocamento,senha);
     document.getElementById("senhapronta").innerHTML = "Sua senha criptografada irá aparecer aqui: " + '"' + resultado + '"'
}

document.getElementById("decodifica").addEventListener("click", decode);