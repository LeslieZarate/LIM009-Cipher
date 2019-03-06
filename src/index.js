const opciones=document.getElementById("botones");
opciones.addEventListener("click",(e)=>{
	let menIngresado=document.getElementById("message").value;
	let offset=document.getElementById("offset").value;
	let emptyString=document.getElementById("empty-string");
	let emptyOffset=document.getElementById("empty-offset");

	if (menIngresado === ""){
		emptyString.innerHTML = "Ingresa tu mensaje";
		menIngresado.readOnly = false;		
	} 
	else if (offset === ""){
		emptyOffset.innerHTML = "Ingresa tu número clave";
		offset.readOnly = false;		
	} 
	else {
		if(e.target.id ==="btn-encode"){
			document.getElementById("mensajeResult").innerHTML="¡Listo ya es secreto!";
			document.getElementById("final-message").innerHTML= cipher.encode(offset,menIngresado);
		}
		else if(e.target.id==="btn-decode"){
			document.getElementById("mensajeResult").innerHTML="¡Que interesante!";
			document.getElementById("final-message").innerHTML= cipher.decode(offset,menIngresado);
		}
		document.getElementById("program").style.display="none";
		document.getElementById("result").style.display="block";
	}
});

/*Nuevo Mensaje*/
 const newMessage = document.getElementById("new-message");
 newMessage.addEventListener("click",()=>{
	location.reload();
 });
 

/*
 document.getElementById("btn-encode").addEventListener("click",cifrar=()=>{
	let menIngresado=document.getElementById("message").value;
	let offset=document.getElementById("offset").value;

	document.getElementById("final-message").innerHTML= cipher.encode(offset,menIngresado);	
	document.getElementById("programa").style.display="none";
    document.getElementById("resultado").style.display="block";

 });
 
document.getElementById("btn-decode").addEventListener("click",funcionDescifrar);
function funcionDescifrar(){
	let menIngresado=document.getElementById("message").value;
	let offset=document.getElementById("offset").value;
	document.getElementById("final-message").innerHTML= cipher.decode(offset,menIngresado);
	
	document.getElementById("programa").style.display="none";
    document.getElementById("resultado").style.display="block"; 

}
*/