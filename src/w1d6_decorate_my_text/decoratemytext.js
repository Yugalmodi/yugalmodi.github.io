let myText;
let bling;
let body;

window.onload = function(){
	let decButton = document.getElementById('bigDecoration');
	myText = document.getElementById('myText');
	bling = document.getElementById('bling');
	body = document.getElementById("body");
    let malkovitch = document.getElementById("malkovitch");
	let igpay = document.getElementById("igpay");
	
	decButton.onclick = ()=> {
		decButton.disabled = true; 
		setInterval(increase, 500);
	}
	bling.onchange = decTextArea;
    igpay.onclick = myIgpay;
	
    malkovitch.onclick = ()=>{
		if(myText.value.length>=5) myText.value='Malkovich';
	}
}

function increase(){
	var style = window.getComputedStyle(myText, null).getPropertyValue('font-size');
	myText.style.fontSize = (parseFloat(style) + 2) + 'px';
}

function decTextArea(){
	if (bling.checked) {
		myText.style.fontWeight = "bold";
		myText.style.color = "green";
		myText.style.textDecoration = "underline";
		body.style.backgroundImage = "url('images/back.jpg')";
		body.style.backgroundRepeat = "repeat";
	} else {
		myText.style.fontWeight = "normal";
		myText.style.color = "black";
		myText.style.textDecoration = "none";
		body.style.backgroundImage = "none";
	}
}

function myIgpay(){
	let data = myText.value;
	for (let i = 0; i < data.length;) {
		if (isVowel(data[i].toLowerCase())){
			data += "ay";
			break;
		} else data = data.substring(1)+ data[i];
	}
	myText.value = data;
}

function isVowel(c){
	return c=='a' || c=='e' ||c=='i' || c=='o' || c=='u';
}