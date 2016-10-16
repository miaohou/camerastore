$(document).ready(function() {

/*0000選單000*/
	$('.topbar_menulist>a').click(function(event) {
		event.preventDefault();
		$(this).parent().find('.list').slideToggle();
		$(this).parent().siblings().find('.list').slideUp();
	});

/*0000右下角gototop000*/
	$('.gototopbn').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:0}, 1000)
	});



/*0000主BN輪撥區000*/
  $("#banner_change").owlCarousel({
 
      navigation :false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      autoPlay: true,
      slideSpeed : 2000,
      loop: true,
      responsive: true,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });


 /*0000產品輪撥區000*/ 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : [375,1], // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })

 /*0000產品輪撥區000*/ 
  var owl = $("#owl-demo02");
 
  owl.owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : [375,1],// itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })

	
});