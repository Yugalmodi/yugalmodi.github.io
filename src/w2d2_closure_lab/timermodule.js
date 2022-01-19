let output;

window.onload = function(){
	document.getElementById('btn-clickme').onclick = delayMsg2;
	output = document.getElementById('output');
}

let rudyTimer = null;
function delayMsg2(){
	if(rudyTimer==null)rudyTimer = setInterval(()=> output.innerHTML  = output.textContent+" Rudy!", 1000);
	else{
		clearInterval(rudyTimer);
		rudyTimer = null;
	}
}



