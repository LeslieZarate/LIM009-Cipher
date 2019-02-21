window.cipher = {
  encode: () => {
    /* Acá va tu código */
  },
  decode: () => {
    /* Acá va tu código */
  }
};

const cifrar = (message,offset) => {
let numAscii;
let resultC = "";
//RECORRIDO EL MENSAJE DEL USUARIO
	for (let i = 0; i < message.length; i++){
		numAscii = message.charCodeAt(i);
//Asimila mayúsculas
		if (numAscii >= 65 && numAscii <= 90){
			numAscii = String.fromCharCode((numAscii - 65 + parseInt(offset)) % 26 + 65);
			resultC = resultC + numAscii;
//Asimila minisculas
		} else if (numAscii >= 97 && numAscii <= 122){
			numAscii = String.fromCharCode((numAscii - 97 + parseInt(offset)) % 26 + 97);
			resultC = resultC + numAscii;
//Asimila el espacio " "
		} else if (numAscii === 32){
			resultC = resultC + " ";
		}
	}
		return resultC
};

// En este objeto declaro los metodos ENCODE y DECODE
window.cipher = {
  encode :cifrar,
  decode :descifrar
};


