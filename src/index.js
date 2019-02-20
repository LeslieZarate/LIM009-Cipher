/* Acá va tu código */
document.getElementById("btnB").addEventListener("click",saludar);
function saludar(){
const name = document.getElementById('name').value;
document.getElementById('saludo').innerHTML =`Bienvenido estas en ${name}`;
document.getElementById("container1").style.display="none";
document.getElementById("container2").style.display="block"; 
}


document.getElementById("btnReg").addEventListener("click",Registrar);
function Registrar(){
document.getElementById("container2").style.display="none";
document.getElementById("container3").style.display="block";
}