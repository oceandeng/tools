$('#outBox').on('click', function(){
	var $this = $(this);
	var $iBox = $('#inBox');

	if($iBox.hasClass('close-two')){
		$iBox.removeClass();
		$iBox.addClass('open-two');
	}else{
		$iBox.removeClass();
		$iBox.addClass('close-two');
	}

	if($this.hasClass('close-one')){
		$this.removeClass();
		$this.addClass('open-one');
	}else{
		$this.removeClass();
		$this.addClass('close-one');
	}
});	