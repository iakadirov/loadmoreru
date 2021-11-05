jQuery(function($){ // use jQuery code inside this to avoid "$ is not defined" error
	$('.misha_loadmore').click(function(){
 
		var button = $(this),
		    data = {
			'action': 'loadmore',
			'query': misha_loadmore_params.posts, // that's how we get params from wp_localize_script() function
			'page' : misha_loadmore_params.current_page
		};
 
		$.ajax({ // you can also use $.post here
			url : misha_loadmore_params.ajaxurl, // AJAX handler
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				button.text('Идет загрузка...'); // change the button text, you can also add a preloader image
			},
			success : function( data ){
				if( data ) { 
					button.text('Показать еще');
					$('#loadmoreContent').append(data); // insert new posts
					misha_loadmore_params.current_page++;
 
					if ( misha_loadmore_params.current_page == misha_loadmore_params.max_page ) 
						button.remove(); // if last page, remove the button
 
					// you can also fire the "post-load" event here if you use a plugin that requires it
					// $( document.body ).trigger( 'post-load' );
				} else {
					button.remove(); // if no data, remove the button as well
				}
			}
		});
	});

	for (var x = 1; x <= 14; x++) {
		const i = x;
    console.log('.myLinkModal'+i)
    $(`.myLinkModal${i}`).click( function(event){
    	console.log(`YEPAT: .myLinkModal${i}`)
      event.preventDefault();
      $('#myOverlay'+i).fadeIn(297,  function(){
        $('#myModal'+i) 
        .css('display', 'block')
        .animate({opacity: 1}, 198);
      });
    });

    $('#myModal'+i+'__close, #myOverlay'+i).click( function(){
      $('#myModal'+i).animate({opacity: 0}, 198, function(){
        $(this).css('display', 'none');
        $('#myOverlay'+i).fadeOut(297);
      });
    });
  }

	/*$(document).ready(function() {
    
  });*/
});