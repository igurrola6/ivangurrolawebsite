
$(document).ready(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    $('.hide').click(clickedHide);
	$('.show').click(clickedShow);
	$('#lightdark').click(clickedInverted);
	$('#desktopmobile').click(clickedDesktop);
	$('.transition').click(appear);
	$('.random').click(randomCardButton);
	$('.randomCommander').click(randomCommanderButton);
	$('.randomReserved').click(randomReservedButton);
  })
  var inverted = true;
  var mobile = true;
  var on = true;
  var obj;
	
	//will be used to store path of image from json from scryfall in the 'random' functions
	var imgList = ""; 
	//will be used to store path of card name from json from scryfall in the 'random' functions
	var cardName = "";
	//will be used to store path of card price from json from scryfall in the 'random' functions
	var cardPrice = "";
	//will be used to store path of card set from json from scryfall in the 'random' functions
	var cardSet = "";
	//will be used to store path of TCGplayer site link from json from scryfall in the 'random' functions
	var tcglink = "";
	
	
	function randomCard(){
	//insert a random mtg card when starting website, later generate with function below ('randomMtgCard') using a button
	jQuery.when(
			jQuery.getJSON('https://api.scryfall.com/cards/random')//get json from scryfall api
		).done( function(json) {
			obj = JSON.stringify(json);//convert the json from scryfall into a string
			tcglink = json.purchase_uris.tcgplayer;//save tcg price from json as string 'tcglink'
			cardSet = json.set_name;//save card set from json as string 'cardSet'
			cardPrice = json.prices.usd;//save card price from json as string 'cardPrice'
			cardName = json.name;//save card name from json as string 'cardName'
			imgList = json.image_uris.normal;//save card image url as string 'imgList'
			
			$('.tcgplayer').attr("href", tcglink);//change the attribute 'href' of element with class of 'tcgplayer' to the variable 'tcglink'
			$('.cardset').text(cardSet);//change the text of element with class 'cardset' with the string variable 'cardSet'
			//check if card price is null, if null display "Not Available", if not null show card price
			if (cardPrice != null)
			  $('.cardprice').text("$" + cardPrice);//change the text of element with class 'cardprice' with the string variable 'carPrice', append dollar sign to string
			else{
			  $('.cardprice').text("Not Available");
			}
			$('.cardname').text("\"" + cardName + "\"");//change the text of element with class 'cardname' with the string variable 'cardName', add quotes to string
			$("#parseid").attr("src", imgList);//change the attribute 'src' of element with class of 'parseid' to the variable 'imgList'
		});
	}
	function randomCommander(){
	//insert a random commander mtg card when starting website, later generate with function below ('randomMtgCard') using a button
	jQuery.when(
			jQuery.getJSON('https://api.scryfall.com/cards/random?q=is:commander')//get json from scryfall api
		).done( function(json) {
			obj = JSON.stringify(json);//convert the json from scryfall into a string
			tcglink = json.purchase_uris.tcgplayer;
			cardSet = json.set_name;
			cardPrice = json.prices.usd;
			cardName = json.name;
			imgList = json.image_uris.normal;
			
			$('.tcgplayer2').attr("href", tcglink);
			$('.cardset2').text(cardSet);
			if (cardPrice != null){
			  $('.cardprice2').text("$" + cardPrice);
			}
			else{
			  $('.cardprice2').text("Not Available");
			}
			$('.cardname2').text("\"" + cardName + "\"");
			$("#parseid2").attr("src", imgList);
		});
	}
	function randomReserved(){	
	//insert a random reserved list mtg card when starting website, later generate with function below ('randomReserveCard') using a button
	jQuery.when(
			jQuery.getJSON('https://api.scryfall.com/cards/random?q=is:reserved')//get json from scryfall api
		).done( function(json) {
			obj = JSON.stringify(json);//convert the json from scryfall into a string
			//console.log(json);//print json to console
			//console.log(json.set_name);
			//console.log(json.name);
			//console.log(json.prices.usd);
			//console.log(json.purchase_uris.tcgplayer);
			tcglink = json.purchase_uris.tcgplayer;
			cardSet = json.set_name;
			cardPrice = json.prices.usd;
			cardName = json.name;
			imgList = json.image_uris.normal;
			
			$('.tcgplayer3').attr("href", tcglink);
			$('.cardset3').text(cardSet);
			if (cardPrice != null){
			  $('.cardprice3').text("$" + cardPrice);
			}
			else{
			  $('.cardprice3').text("Not Available");
			}
			$('.cardname3').text("\"" + cardName + "\"");
			$("#parseid3").attr("src", imgList);
		});
	}
		
	function randomCardButton(){
	   randomCard();
	}
	function randomCommanderButton(){
	   randomCommander();
	}
	function randomReservedButton(){
	   randomReserved();
	}
	//execute functions to set card details on web start
	randomCard();
	randomCommander();
	randomReserved();
  
  
  $(document).on('click', '#a', function() { 
	 $('#a').transition('shake');
    
	});
  
   function clickedHide() {
      $( "#a" ).hide();
    }
   function clickedShow() {
      $( "#a" ).show();
    }
   function appear(){
	   
	   if (on == true){
	    $("h1").css("visibility", "collapse");
		on = false;
	   }
	   else{
		$("h1").css("visibility", "visible");   
		on = true;
	   }
   }
	
   //this is for switching css files between dark mode and light mode
   function clickedInverted() {
	  if (inverted == true){
        $('#desktopstyle').attr('href','css/lightstyle.css');
		$('#lightdark').text('Dark Mode');
		$("div").removeClass("inverted");
		$("h1").removeClass("inverted");
		$("h2").removeClass("inverted");
		$("h4").removeClass("inverted");
		$("a").removeClass("inverted");
		inverted = false;
	  }
	  else{
		$('#desktopstyle').attr('href','css/styles.css');
		$('#lightdark').text('Light Mode');
		$("div").addClass("inverted");
		$("h1").addClass("inverted");
		$("h2").addClass("inverted");
		$("h4").addClass("inverted");
		$("a").addClass("inverted");
		inverted = true;
	  }
    }
	
	function clickedDesktop() {
		if (mobile == true){
		  $('#desktopmobile').text('Mobile');
		  //$("#mobile").removeClass("column");
		  $('.mobile').removeClass("column");
		  $('#doge').attr('id','');
		  $("#mobile").addClass("row");
		  $('#desktopstyle').attr('href','css/mobilestyle.css');
		  $("div").removeClass("inverted");
		  mobile = false;
		}
		else{
		  $('#desktopmobile').text('Desktop');	
		  $('#desktopstyle').attr('href','css/styles.css');
		  $("div").addClass("inverted");
		  mobile = true;
		}
	}
	
	
  