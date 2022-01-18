let textArea;
let start;
let stop;
let turbo;
let animation;
let size;
let frameId=0;
let speed = 250;
let timerId;
let initialTextValue;
let isAnimRunning = false;
let currentFrame = "";

window.onload = function() {
	textArea = document.getElementById('textBox');
	start = document.getElementById('start');
	stop = document.getElementById('stop');
	turbo = document.getElementById('turbo');
	animation = document.getElementById('animation');
	size = document.getElementById('size');
	
	start.onclick = startAnimation;
	stop.onclick = stopAnimation;
	turbo.onchange = ()=>{
		if(turbo.checked) speed = 50;
		else speed = 250;
		if(isAnimRunning){
			if (timerId) clearInterval(timerId);
			timerId = setInterval(playAnim, speed, currentFrame);
		}
	};
	animation.onchange = () => textArea.value = ANIMATIONS[animation.value];
	size.onchange = () => textArea.style.fontSize = size.value;
}

function startAnimation(){
	isAnimRunning = true;
	currentFrame = textArea.value.split("=====\n");
	if (currentFrame.length>1){
		start.disabled = true;
		stop.disabled = false;
		animation.disabled = true;
		initialTextValue = textArea.value;
		timerId = setInterval(playAnim, speed, currentFrame);
	}
}
function stopAnimation(){
	isAnimRunning = false;
	start.disabled = false;
	stop.disabled = true;
	animation.disabled = false;
	if (timerId) clearInterval(timerId);
    textBox.value = initialTextValue;
}

function playAnim(myFrame){
	if (frameId >= myFrame.length) frameId = 0;
	textArea.value = myFrame[frameId++];
}