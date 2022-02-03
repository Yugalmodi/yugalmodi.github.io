$(function(){
	var isVeg = false, $f, $m;
	$('#vegOn').click(function(){
		if (!isVeg){
			isVeg = true;
			$f = $('.fish').parent().parent().detach();
			
			$('.hamburger').replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
			$('.portobello').parent().parent().addClass("veg_leaf");
			
			$('.meat').after("<li class='tofu'><em>Tofu</em></li>");
			$('.tofu').parent().parent().addClass("veg_leaf");
			$m = $('.meat').detach();
		}
	});
	$('#restoreMe').click(function(){
		if(isVeg){
			isVeg = false;
			$('.menu_entrees li').first().after($f);
			
			$('.portobello').replaceWith("<li class='hamburger'>hamburger</li>");
			$('.hamburger').parent().parent().removeClass("veg_leaf");
			
			$('.tofu').each(function(i){
				$(this).after($m[i]);
			});
			$('.tofu').parent().parent().removeClass("veg_leaf");
			$('.tofu').remove();
		}
	});
});