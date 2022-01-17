let q3_1;
let q3_2;
const wait_message = "Wait for alert...";
const button_value = "verify";


window.onload = function(){
	let q2_1 = document.getElementById('q2_1');
	q2_1.onclick = ()=>alert(x);
	
	let q2_2 = document.getElementById('q2_2');
	q2_2.onclick = ()=>alert(y(2,3));
	
	q3_1 = document.getElementById('q3_1');
	q3_1.onclick = ()=>{
						q3_1.disabled = true;
						q3_1.value = wait_message;
						setTimeout(booyah1, 2000);
					};
	
	q3_2 = document.getElementById('q3_2');
	q3_2.onclick = ()=>{
						q3_2.disabled = true; 
						q3_2.value = wait_message;
						setTimeout(booyah2(), 2000);
					};
};

var myfunc = function(a, x) {
	return a * x;
};
var x = myfunc(2, 3);
var y = myfunc;

function booyah1(){
    alert("BOOYAH!");
	q3_1.value = button_value;
	q3_1.disabled = false;
}

function booyah2(){
    return ()=> {
		alert("BOOYAH!");
		q3_2.value = button_value;
		q3_2.disabled = false;
	}
}