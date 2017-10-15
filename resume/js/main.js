var curId = 0;
var arrScene = ["home", "about", "portfolio" ,"judge"];
var arrColor = ["#3498db","#9b59b6","#e67e22","#1abc9c"];
$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: arrColor,
		resize:true,
		css3: true
	});
	$('.protoflio-link').each(function(index){
	
		$(this).attr("index", index+1);
		$(this).click(function(event){
			console.log($(this));
			event.preventDefault();
			$('#popup').addClass('show'); //切换show类
			$('#popup-content').addClass('show');
			$('#popup-holder').html($('#work'+$(this).attr("index")).html());
		});
	});
	$('#close, #popup-bg').click(function(event){
		event.preventDefault();
		$('#popup').removeClass('show'); //切换show类
		$('#popup-content').removeClass('show');
	});
});
