window.onload = function(){
	document.getElementById('btn-clickme').onclick = delayMsg2;
}

let rudyTimer = null;
function delayMsg2(){
	let output = document.getElementById('output');
	if(rudyTimer==null)rudyTimer = setInterval(()=> output.innerHTML  = output.textContent+" Rudy!", 1000);
	else{
		clearInterval(rudyTimer);
		rudyTimer = null;
	}
}



