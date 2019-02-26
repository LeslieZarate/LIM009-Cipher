window.cipher = {

    encode : (offset,string) => {
        let numeroAscii;
        let resultCif =[];
		//RECORRIDO EL MENSAJE INGRESADO
		for (let i = 0; i < string.length; i++){
			numeroAscii = string.charCodeAt(i);
		/// mayúsculas
			if (numeroAscii >= 65 && numeroAscii <= 90){
				numeroAscii = String.fromCharCode((numeroAscii - 65 + parseInt(offset)) % 26 + 65);
				resultCif = resultCif + numeroAscii;
			}
		//minusculas
			else if (numeroAscii >= 97 && numeroAscii <= 122){
				numeroAscii = String.fromCharCode((numeroAscii - 97 + parseInt(offset)) % 26 + 97);
				resultCif = resultCif + numeroAscii;
			}
		//numeros
			else if(numeroAscii>=48 && numeroAscii <=57){
				numeroAscii = String.fromCharCode((numeroAscii - 48 + parseInt(offset)) % 10 + 48);
				resultCif = resultCif + numeroAscii;
			}
		}
		return resultCif;
	},
	
	decode :(offset,string) => {
		let numeroAscii;		
		let resultDes =[];
		for(let i =0;i<string.length;i++){
			numeroAscii=string.charCodeAt(i);
			if (numeroAscii >= 65 && numeroAscii <= 90){
				numeroAscii = String.fromCharCode((numeroAscii - 90 - parseInt(offset)) % 26 + 90);
				resultDes = resultDes + numeroAscii;
			}
			else if (numeroAscii >= 97 && numeroAscii <= 122){
				numeroAscii = String.fromCharCode((numeroAscii - 122 - parseInt(offset)) % 26 + 122);
				resultDes = resultDes + numeroAscii;
			}
			else if(numeroAscii>=48 && numeroAscii <=57){
				numeroAscii = String.fromCharCode((numeroAscii - 57 - parseInt(offset)) % 10 + 57);
				resultDes = resultDes + numeroAscii;
			}
		}
		return resultDes; 
	}
};


