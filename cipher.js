const cipher = {encode,decode}

function encode(offset, mensagem) {
  if (typeof offset != "number"){
    throw TypeError("Necessário escolher um número")
  }

  if (typeof mensagem != "string"){
    throw TypeError("Necessário digitar uma mensagem")
  }
  let newText = ""
  for (let i = 0; i < mensagem.length; i++) {
    let codifica = ((mensagem[i].charCodeAt(0) - 65 + offset) %26) + 65;
    let textoPronto = String.fromCharCode(codifica);
    newText += textoPronto;
  }  
  return newText;
}

function decode(offset,mensagem) {
  if (typeof offset != "number"){
    throw TypeError()
  }

  if (typeof mensagem != "string"){
    throw TypeError()
  }
  let newText = ""
  for (let i = 0; i < mensagem.length; i++) {
   let decodifica = (mensagem.charCodeAt(i) - 90 - offset) %26 + 90;
   let textoPronto = String.fromCharCode(decodifica);
   newText += textoPronto;
 }
 return newText;
}

export default cipher;
