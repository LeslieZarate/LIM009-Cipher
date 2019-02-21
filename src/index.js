/**** cifrar ****/

 document.getElementById("btn-encode").addEventListener("click",funcionCifrar)
 function funcionCifrar(){

 	let menIngresado=document.getElementById("message").value;
 	let offset=document.getElementById("offset").value;

 	/*cipher.encode(menIngresado,offset);

 	let menCifrado=menIngresado.replace(menIngresado,window.cipher.encode(menIngresado,offset);
 	document.getElementById("final-message").innerHTML = menCifrado;
 	
	
	if(messageVal===""){
		emptyMessage.innerHTML=`Ingresa un texto aqui..`;
	}
	else if(offsetVal===""){
		emptyOffset.innerHTML=`Ingrese el nivel de seguridad aqui..`;
		
	}
	else {
		cipher.encode(messageVal,offsetVal);
	}
*/
	document.getElementById("final-message").innerHTML= menIngresado;
    document.getElementById("programa").style.display="none";
    document.getElementById("resultado").style.display="block";
   

}


/*Nuevo Mensaje*/
 const newMessage = document.getElementById("new-message");
 newMessage.addEventListener("click",nuevo);
 function nuevo(){
 	location.reload()
 }






