document.getElementById("main").addEventListener("click",(e)=>{
	document.getElementById("about-home").style.display="none";
  document.getElementById("instructions").style.display="block";
  document.getElementById("program").style.display="block";
  if(e.target.id ==="encode"){
		document.getElementById("form-encode").style.display="block";
    document.getElementById("form-decode").style.display="none";
    limpiar();
    const btnEncode = document.getElementById("btn-encode");
    btnEncode.addEventListener("click",()=>{
      let messageEncode = document.getElementById("messageEncode").value;
      let offsetEncode = document.getElementById("offsetEncode").value;
      document.getElementById("result-encode").innerHTML=cipher.encode(offsetEncode,messageEncode);
    });
  }
  else if(e.target.id ==="decode"){
		document.getElementById("form-decode").style.display="block";
    document.getElementById("form-encode").style.display="none";
    limpiar();
    const btnDecode = document.getElementById("btn-decode");
    btnDecode.addEventListener("click",()=>{
			let messageDecode = document.getElementById("messageDecode").value;
			let offsetDecode = document.getElementById("offsetDecode").value;
			document.getElementById("result-decode").innerHTML= cipher.decode(offsetDecode,messageDecode);
    });
  }
});	
	
function limpiar(){
	document.getElementById("form1").reset();
	document.getElementById("form").reset();
	document.getElementById("result-encode").innerHTML="";
	document.getElementById("result-decode").innerHTML="";	
}