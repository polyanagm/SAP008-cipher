const cipher = {encode,decode}

function encode(offset, mensagem) {
  let newText = ""
  for (let i = 0; i < mensagem.length; i++) {
    let codifica = ((mensagem.charCodeAt(i) - 65 + offset) %26) + 65;
    let textoPronto = String.fromCharCode(codifica);
    newText += textoPronto;
  }  
  return newText;
}

function decode(offset,mensagem){
 let newText = ""
 for (let i = 0; i < mensagem.length; i++) {
   let decodifica = ((mensagem.charCodeAt(i) - 65 - offset) %26) + 65;
   let textoPronto = String.fromCharCode(decodifica);
   newText += textoPronto
 }
 return newText;

}

export default cipher;
