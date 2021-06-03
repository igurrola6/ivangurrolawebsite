
$(document).ready(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    $('.hide').click(clickedHide);
	$('.show').click(clickedShow);
	$('.invert').click(clickedInverted);
  })
  var inverted = true;
  $(document).on('click', '#a', function() { alert("hello"); });
  
   function clickedHide() {
      $( "#a" ).hide();
    }
   function clickedShow() {
      $( "#a" ).show();
    }
	
   //this is for testing, it is much better to switch css files, one for dark mode and one for light mode 
   function clickedInverted() {
	  if (inverted == true){
        $( "div" ).removeClass('inverted');
		$( "a" ).removeClass('inverted');
		$("body").css("background", "white");
		$("body").css("color", "black");
		$("h1").css("color", "black");
		$('.invert').text('Dark Mode');
		inverted = false;
	  }
	  else{
		$( "div" ).addClass('inverted'); 
		$( "a" ).addClass('inverted');		
		$("body").css("background", "black");
		$("h1").css("color", "white");
		$('.invert').text('Light Mode');
		inverted = true;
	  }
    }
  