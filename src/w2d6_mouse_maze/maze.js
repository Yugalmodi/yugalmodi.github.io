$(document).ready(function () {
	let start=0;
	$("#start").click(()=>{
		start = 1;
		$('#status').addClass("started").text("Game Started!");
	});
	$("#end").mouseover(()=>{
		start = 0;
		$('#status').removeClass("started").addClass("win").text("You Win! :]");
	});
	$(".boundary").mouseover(youLose);
	$("#maze").mouseleave(youLose);
	
	function youLose(){
		if(start==1) {
			$("div .boundary").addClass("youlose");
			$('#status').removeClass("started").addClass("lose").text("You lose!");
		}
	}
});



