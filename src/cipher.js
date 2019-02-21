window.cipher = {
  encode: (offset,string) => {
		let numeroAscii;
    let resultCad = "";
//RECORRIDO EL MENSAJE INGRESADO
		for (let i = 0; i < string.length; i++){
			numeroAscii = string.charCodeAt(i);
	// mayúsculas
			if (numeroAscii >= 65 && numeroAscii <= 90){
				numeroAscii = String.fromCharCode((numeroAscii - 65 + parseInt(offset)) % 26 + 65);
				resultCad = resultCad + numeroAscii;
			}
		}
		return resultCad

	},

	

  decode: () => {
    /* Acá va tu código */
	}
	
};


