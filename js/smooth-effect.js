	$(function() {
		"use strict";
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

 var $section = $('#animated-skills').appear(function() {
	 "use strict";
        function loadDaBars() {
            var bar = $('.progress-bar');
            var bar_width = $(this);
            $(function(){
              $(bar).each(function(){
                bar_width = $(this).attr('aria-valuenow');
                $(this).width(bar_width + '%');
              });
            });
        }
        loadDaBars();
    });

(function($){
	"use strict";
    var wow = new WOW({
        offset: 50,
        mobile: false
    });

    wow.init();


})(jQuery);


