
(function ($) {

/**
	*
 */
window.index = 0;
$(document).ready(function(){
  $('#chapter_index').click(function(){
		if(index === 0){
			$('.region-highlighted').slideDown('slow',function(){
			  $('#chapter_index').text("Close Index");
			  $('#chapter_index').addClass("indexOpened");
			  $('#chapter_index').removeClass("indexClosed");
			});
			window.index = 1;
		}else{
			$('.region-highlighted').slideUp('slow',function(){
			  $('#chapter_index').text("Chapter Index");
			  $('#chapter_index').addClass("indexClosed");
			  $('#chapter_index').removeClass("indexOpened");
			});
			window.index = 0;
		}
		return false;
	});
});
Drupal.behaviors.ForgottenChapters = {
  attach: function (context) {

    var i = false;
    $('#view_full_article').click(function(e){
      e.preventDefault();
      $('#body-more').slideToggle('slow');
      if(!i){
        $(this).text("Read Less");
        i = true;
      }else{
        $(this).text("Read More");
        i = false;
      }
    });

    
    $('.field-name-field-source a').colorbox(
      {iframe:true, width:"100%", height:"100%",
      onComplete:function(){
      }
    });

    $(document).bind('cbox_complete', function(){
      var element = $.colorbox.element();
      if(element.hasClass('view_transcript')){
        $('#cboxTopCenter').html('<span id="transcript_title">Transcript Text</span>');
        $('#cboxLoadedContent').jScrollPane(
				{
					showArrows: true,
					verticalArrowPositions: 'after',
					verticalDragMinHeight: 26,
					verticalDragMaxHeight: 26,
					horizontalDragMinWidth: 15,
					horizontalDragMaxWidth: 15
					
				});
      }else{
        $('#cboxTopCenter').html('<span id="transcript_title">Image</span>');
      }
      
    });

  }
};
  
})(jQuery);