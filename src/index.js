/**** cifrar ****/

 document.getElementById("btn-encode").addEventListener("click",funcionCifrar)
 function funcionCifrar(){

 	let menIngresado=document.getElementById("message").value;
	let offset=document.getElementById("offset").value;

	document.getElementById("final-message").innerHTML= cipher.encode(offset,menIngresado);
	
	document.getElementById("programa").style.display="none";
    document.getElementById("resultado").style.display="block";
	 
	

}


/*Nuevo Mensaje*/
 const newMessage = document.getElementById("new-message");
 newMessage.addEventListener("click",nuevo);
 function nuevo(){
 	location.reload()
 }






