
$(document).ready(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    $('.hide').click(clickedHide);
	$('.show').click(clickedShow);
  })
  $(document).on('click', '#a', function() { alert("hello"); });
  
   function clickedHide() {
      $( "#a" ).hide();
    }
   function clickedShow() {
      $( "#a" ).show();
    }
  