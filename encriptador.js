


 function encriptar(){

 	let mensaje=document.querySelector("input").value;
 	let mensajeCifrado= mensaje.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat").toLowerCase();
 	
 	var msg = document.querySelector(".text");

 	msg.textContent = mensajeCifrado;
	
     

 }
 	
 function desencriptar(){

 	let mensajeCifrado=document.querySelector("input").value;
 	let mensaje= mensajeCifrado.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u").toLowerCase();

 	var originalMsg =document.querySelector(".text");

	msg.textContent = mensaje;
   
 }

function copiar(){
    var copyText = document.getElementById("msg");
    copyText.select()
    document.execCommand("copy");
    console.log(msg)

}



