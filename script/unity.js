$(function(){
	$('section section img').mouseenter(function(){
		$(this).animate({width:'90%'},500)
		.css({"border":"5px solid black","borderRadius":"5px","borderColor":"grey"})
	})
	$('section section img').mouseleave(function(){
		$(this).animate({width:'80%'},500).css("border","0px")
	})

	$('nav.nav_title li').mouseenter(function(){
		$('nav.nav_title li ul').slideDown(500)
	})
	$('nav.nav_title li').mouseleave(function(){
		$('nav.nav_title li ul').slideUp(500)
	})















})

