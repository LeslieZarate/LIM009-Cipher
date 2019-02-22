window.cipher = {
 	encode: (offset,string) => {
		let numeroAscii;
	    let resultCif=[];
	//RECORRIDO EL MENSAJE INGRESADO
		for (let i = 0; i < string.length; i++){
				numeroAscii = string.charCodeAt(i);
		// mayúsculas
				if (numeroAscii >= 65 && numeroAscii <= 90){
					numeroAscii = String.fromCharCode((numeroAscii - 65 + parseInt(offset)) % 26 + 65);
					resultCif = resultCif + numeroAscii;
				}
				else if (numeroAscii >= 97 && numeroAscii <= 122){
					numeroAscii = String.fromCharCode((numeroAscii - 97 + parseInt(offset)) % 26 + 97);
					resultCif = resultCif + numeroAscii;
				}		
			}
			return resultCif

	},
	
	decode: (offset,string) => {
		let numeroAscii;
		let resultDes =[];
		let clave = parseInt((26-offset)%26)
		for(let i =0;i<string.length;i++){
			numeroAscii=string.charCodeAt(i);

			if (numeroAscii >= 65 && numeroAscii <= 90){
				numeroAscii = String.fromCharCode((numeroAscii - 65 + clave) % 26 + 65);
				resultDes = resultDes + numeroAscii;
			}
			if (numeroAscii >= 97 && numeroAscii <= 122){
				numeroAscii = String.fromCharCode((numeroAscii - 97 + clave) % 26 + 97);
				resultDes = resultDes + numeroAscii;
			}
		}
		return resultDes
  
	}

  
	
};


