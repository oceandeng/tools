(function($){
	var sW = 0, sH = 0, dW = 0, dH = 0;

	$(function(){
		sW = $(window).width();
		sH = $(window).height();
		dW = document.body.clientWidth;
		dH = document.body.clientHeight;

		if(dH < sH){
			$('body').css({
				height: sH
			});
		};
	});


	$(function(){
	    $(document).on('click', '*[data-href]', function(){
	        var $_this = $(this);
	        location.href = $_this.attr('data-href');
	    });
	});

})(jQuery);