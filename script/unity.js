$(function(){
	$('section section img').mouseenter(function(){
		$(this).animate({width:'90%'},500)
		.css({"border":"5px solid black","borderRadius":"5px","borderColor":"grey"})
	})
	$('section section img').mouseleave(function(){
		$(this).animate({width:'80%'},300).css("border","0px")
	})
})