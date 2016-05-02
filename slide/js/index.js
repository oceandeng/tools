(function(){

var now = { row:1}, last = { row:0};
const towards = { up:1, down:3};
var isAnimating = false;

document.addEventListener('touchmove', function(event){ event.preventDefault(); }, true);

$(function(){
	$('svg').on('touchstart touchmove touchend', function(e){
		e.preventDefault();
		e.stopPropagation();
	});
})

$(document).swipeUp(function(){
	if (isAnimating) return;
	last.row = now.row;
	if (last.row != 6) { now.row = last.row+1; pageMove(towards.up);}
});

$(document).swipeDown(function(){
	if (isAnimating) return;
	last.row = now.row;
	if (last.row!=1) { now.row = last.row-1; pageMove(towards.down);}
});

function pageMove(tw){
	var lastPage = ".page-"+last.row,
		nowPage = ".page-"+now.row;
	
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
		
		isAnimating = false;
	},600);
}

})();