/*	Menu START */
jQuery(function(){
	"use strict";
	// main navigation init
	jQuery('.sf-menu').superfish({
		delay:	300,	// one second delay on mouseout 
		animation:   {opacity:'show',height:'show'}, // fade-in and slide-down animation
		speed:       'fast',  // faster animation speed 
		autoArrows:  true,   // generation of arrow mark-up (for submenu) 
		dropShadows: false
	});
});
 /*	Menu END */
 
 /* scrolling START */

jQuery(window).load(function($) {
	"use strict";
	var topMenuHeight = jQuery("#header-wrapper").outerHeight();
	jQuery('.main-menu').localScroll({
		offset: -130
	});
	jQuery('.mobile-menu').localScroll({
		offset: 0
	});
	jQuery('.vc_three_column_text').localScroll({
		offset: -130
	});
	jQuery('.pego-link').localScroll({
		offset: -130
	});
	jQuery('.tp-caption').localScroll({
		offset: -130
	});
});	

/* scrolling END */
 
 
/* menu effect START */
 jQuery(document).ready(function($){
	 "use strict";
	var menustate = false;
	$(".menu-icons").on('click', function() {
		if (menustate == false) {
			jQuery(this).parent().find(".main-menu").addClass("showmenu");
			menustate = true;
			jQuery(".menu-icon-open").fadeOut();
			jQuery(".menu-icon-close").fadeIn();
		}
		else {
			jQuery(this).parent().find(".main-menu").removeClass("showmenu");
			menustate = false;
			jQuery(".menu-icon-open").fadeIn();
			jQuery(".menu-icon-close").fadeOut();
		}
  	});
});
/* menu effect END */
 
 
  jQuery(window).scroll(function () //Binds to the window's scroll event
        { 
			"use strict";
        var orgElementPos = jQuery('body').offset();
  		orgElementTop = orgElementPos.top; 
  		var scrollFromTop = jQuery(window).scrollTop();
			if (scrollFromTop > 84) {
				jQuery('.header-wrapper').addClass('sticky-header');
				
			} else {
				jQuery('.header-wrapper').removeClass('sticky-header');
			}
  		
        }
        );
 
 
 /* mobile menu START */

jQuery(document).ready(function($){
	"use strict";
	var slide = false;
	$(".mobile-menu-opening").on('click', function(){
	
		if (slide == false) {
			$(".mobile-menu-wrapper").slideDown("slow");
			slide = true;
		}
		else {
			$(".mobile-menu-wrapper").slideUp("slow");
			slide = false;

		}
  	});
});

 /* mobile menu END */

/* Sticky header START */	

if (jQuery(".main-menu").length > 0) {
	jQuery(document).ready(function(){
		"use strict";
		pego_sticky_nav();
	});

	var orgElementPos = jQuery('.main-menu').offset();
	orgElementTop = orgElementPos.top + 60;  
	jQuery(window).scroll(function() {
		"use strict";
		pego_sticky_nav();
	});

	function pego_sticky_nav() {
		"use strict";
	  if (jQuery(window).scrollTop() >= (orgElementTop)) { 
		jQuery('.sticky-header').slideDown(400);
	   } else {
		jQuery('.sticky-header').slideUp(400);
	   }
	}
}
/* Sticky header END */	
