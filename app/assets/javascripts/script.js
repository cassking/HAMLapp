//comment here
// TASK 1
//Testing a selection to be sure it exists on page
$(document).ready(function() {
console.log($('#celebs tr').length + 'elements!');
});

$(document).ready(function(){
 console.log($('#celebs tbody tr:even').length + 'even rows in the table');
});

//selectors, this sselects all these
//$('p, div, span, input')
// TASK 2

//reading css properties
$(document).ready(function(){
	var fontSize = $('#celebs tbody tr:first').css('font-size');
	var tableRows = ($('#celebs tbody tr').length);
	console.log(fontSize + ' is the font color' + tableRows + ' this number rows')

});

// TASK 3
//targetting the css the long way
		// $(document).ready(function() {
		// 	$('#celebs tbody tr:even').css('background-color', '#dddddd');
		// 	$('#celebs tbody tr:even').css('color', '#039');
		// });
// TASK 4
//targetting css using object literals, but this adds styles inline not best practice
		// $(document).ready(function() {
		// 	$('#celebs tbody tr:odd').css(
		// 		{'background-color':'#000', 
		// 		'color':'#eee'}
		// 		);
		// });
// TASK 5
//adding and removing css, moving css to the stylesheet

$(document).ready(function()
{
	$('#celebs tbody tr:even').addClass('zebra');

});

//TASK 6 hiding elements
//$('#hideButton').click(function(){
	//$('#comment').hide();
//});
$(document).ready(function(){
	$('#hideButton').click(function(){
	    $('.disclaimer').hide();
	});
});
//TASK 7 , this: use this to refer to the element that trigggered event
$(document).ready(function(){
	$('#celebs').click(function() {
		$(this).append("<p>this is text</p>");
	});
});
//TASK 8 show the disclaimer if hidden by mistake

$(document).ready(function(){
	$('#showButton').click(function(){
		$('.disclaimer').show();
	});

});
//TASK 9, replace two separate buttons wiht one, use toggle
// $(document).ready(function(){
// 	$('#toggleButton').click(function(){
// 		if ($('.disclaimer').is(':visible'))
// 		{
// 			$('.disclaimer').hide();
// 		}
// 		else 
// 			{ 
// 			$('.disclaimer').show();
// 		}
// 	});

// });
//TASK 10 implement toggle with simple toggle() function instead of show() and hide()
 $(document).ready(function(){
 	$('#toggleButton').click(function(){
 		$('.disclaimer').toggle();

 		if ($('.disclaimer').is(':visible')) {
 			$(this).val('Hide Disclaimer');
 		}
 		else {
 			$(this).val('Show Disclaimer');
 			
 		}
 	});
 });
//TASK 11 adding elements to the DOM using jQuery
// $(document).ready(function(){
// 	$('<p> This is a new dynamically generated paragraph</p>').addClass('new');
// 	alert('created')
// });
//TASK 12 add elements to the DOM using jQuery
$(document).ready(function(){
	$('#insertButton').click(function(){
		$('<strong> END</strong>').insertAfter('.disclaimer');
		$('<strong> START</strong>').insertBefore('.disclaimer');
		$('<strong>THIS IS INSERTED INSIDE</strong>').prependTo('.disclaimer');
		$('<strong>THIS IS INSERTED INSIDE</strong>').appendTo('.disclaimer');
	});
});

// $(document).ready(function(){
// 	$('#thisTest').click(function(){
// 		$(this).hide();

// 	});


// });

//TASK 13 Add button with Jquery only for users with javascript and give it toggle functionality
//<input type="button" value="toggle" id="toggleButton2">

$(document).ready(function(){
	$('<input type="button" value="toggle2" id="toggleButton2">').insertAfter('.h2');
	$("#toggleButton2").click(function(){
		$('.disclaimer').toggle();
	});

});

//TASK 14 simplify syntax when adding elements to DOM, decrease repetition
//Practice the syntax below

$(document).ready(function(){
	$('<div>', {
		id: 'specialButton',
		text: 'button  to click',
		width: '150px',
		height: '30px',
		click: function(){ 
			alert('this is an alert');
		}
	}).insertBefore('.disclaimer')
});
//TASK 15  REMOVING existing elements
// $(document).ready(function(){
// 	$('.no-script').remove();
// 	$('#celebs tr').remove(':contains("Singer")');


// });

// TASK 16  MODIFYING CONTENT using .html and .text,
// $(document).ready(function(){

// 	$('p').text('<strong>I have replaced this dynamically</strong>');
// 	$('h2').html('<strong>I have replaced this dynamically</strong>');
// 	alert($('p:last').text());

// });

//TASK 17 using fadeIn and fadeOut
// $(document).ready(function(){

// 	$('#fadeButton').click(function(){
// 		$('.disclaimer').slideToggle(1000);
// 		$('.no-script').toggle(1000);


// 	});

// });

//TASK 18 ADD  a callback function to the fadeOut function
//the callback happens after the fading action is finished, in this case the alert

// $(document).ready(function(){

// 	$('#fadeButton').click(function(){
// 		$('.h2').slideUp(1000);
// 			alert('this fades!');
// 	});

// });
// $(document).ready(function(){
// 	$('#fadeButton2').click(function(){
// 		$('.disclaimer').slideDown();
// 			// alert('this is fading');

// });
//TASK 19 a callback function to the fadeOut function
//the callback happens after the fading action is finished
//in this case, hide the button once the disclaimer is hidden
$(document).ready(function(){
	
	$('.disclaimer').slideToggle('slow', function(){
		$('#fadeButton2').hide();

	});

});

//TASK 20 using mouseout and mouseover and hover effects
//first attempt

// $(document).ready (function(){
// 	$('#celebs tr').mouseover(function(){
// // alert('go');
// 		$('tr:even').addClass('zebrahover');

// 	});
// 	$('#celebs tr').mouseout(function(){
// // alert('go');
// 		$('tr').removeClass('zebrahover');

// 	});

// });

// TASK 20 USING MOUSEOUT AND MOUSEOVER, ATTEMPT TWO, the long way

// $(document).ready(function(){

// 	$('#celebs tr').mouseover(function(){
// 		$(this).addClass('zebrahover');
// 	});
// 	$('#celebs tr').mouseout(function(){
// 		$(this).removeClass('zebrahover');
// 	});



// });

//TASK 20 USING A SHORTER WAY  USING THE HOVER WHCIH COMBINES BOTH MOUSEOVER/MOUSEOUT
//also practice replacing string

// $(document).ready(function(){

// 	$('#celebs tr').hover(function(){
// 		$(this).addClass('zebrahover');
// 	},
// 	function() {
// 		$(this).removeClass('zebrahover');
// 			//alert($('td.colemail').text());
// 			//$(this).text($(this).text().replace('@', ' @ ')); THIS REPLACES STRING
// 			//alert('g0');
// 	}

// 	);

// });
/////
///SPLIT STRING AFTER @
// var string = "a";
// var newstring = string.replace(/\a/g, "xxxxxxxxxx");
// $(document).ready(function(){

// 	if ($('td:contains("a")').length > 0 ){
// 		//$('.colemail').fadeOut(1000);
// 		//$('body').html().replace(string, newstring);

// $(newstring).appendTo('.info');
// alert(newstring);
// 	}
// });
//TASK 20 PRACTICE 
$(document).ready(function(){
	$('.disclaimer').click(function() {
		$(this).text($(this).text().replace('Disclaimer!', 'WARNING:'));
		// alert('boo');
	});
});

//TASK 20 using TOGGLECLASS instead of two separate actions

$(document).ready(function(){
	 $('#celebs tr').hover(function(){
		$(this).toggleClass('zebrahover');
	 });

});

//TASK 21 COMBINING MUTLIPLE  ACTIONS TO HIDE THE SPOILER AND REAVEAL ONLY WHEN CLICKING
//FIRST ATTEMPT TO DO IT ON MY OWN
// $(document).ready(function(){

// 	$('.spoiler').hide();		
// 	$('<ul  style = "list-style:none; 
// 		display: block; width: 150px; 
// 		text-align: center;padding: 10px; background-color: 
// 		red; color: white; border-radius: 4px;">
// 		<li style="border: none;">REVEAL ANSWER</li>
// 		</ul>').insertBefore('.spoiler');

// 	$('ul').click(function(){
// 		$('.spoiler').addClass('show');
// 		$(this).fadeOut();
// 	});



// });

//TASK 21 COMBINING ACTIONS USING THE NEW next ACTION, next SIBLING IN DOM
// $(document).ready(function(){
// $('.spoiler').hide();		
// $('<ul class="revealer" style = "list-style:none; display: block; width: 150px; text-align: center;padding: 10px; background-color: red; color: white; border-radius: 4px;"><li style="border: none;">REVEAL ANSWER</li></ul>').insertBefore('.spoiler');
// $('.revealer').click(function(){
// 	$(this).fadeOut();
// 	$(this).next().show();

// });

// });

//TASK 21 REVIEW AFTER WEEKEND
//insertBefore
// $(document).ready(function(){
// 	$('.spoiler').hide();
// 	$('<ul style ="background-color: blue; border-radius: 4px; color: white; padding: 5px;" class="revealer"><li>Show Spoiler</li></ul>').insertBefore('.spoiler');
// 	// $('#news p').click(function(){
// 	$('.revealer').click(function(){
// 		$(this).next().show();//show next item in DOM, in this case the span
// 			$(this).fadeOut();


// 	});
////TASK 21 REVIEW AFTER WEEKEND. insertAfter to use the PREV
$(document).ready(function(){
	$('.spoiler').hide();
	$('<ul style ="background-color: blue; border-radius: 4px; color: white; padding: 5px; width: 125px" class="revealer"><li style="border: none;">Show Spoiler</li></ul>').insertAfter('.spoiler');
	// $('#news p').click(function(){
	$('.revealer').click(function(){
		$(this).prev().show();//show next item in DOM, in this case the span
			$(this).fadeOut();


	});



});

//TASK 23 INTRO TO THE animate ACTION
//small intro to how it works
// $(document).ready(function(){
// 	$('p').animate({
// 		padding: '200px',
// 		fontSize: ' 30px'


// 	}, 2000);//2 seconds, 2,000 milliseconds


// });
$(document).ready(function(){


	$('#navigation li').hover(function(){
		$(this).animate({
			paddingLeft: '+=20px'
		}, 1000);


	},
	function(){
		$(this).animate( {
			paddingLeft: '-=20px'
		});

	});

});

//MORE PRACTICE WITH HOVER AND CHANGING PROPERTIES
 // $(document).ready(function(){

 // 	$('#intro').hover(function(){
 		
 // 		$(this).animate({
 // 			paddingLeft: '+=20px',
 // 			height: 'hide',
 // 			opacity: 'hide'
 // 				}, 'fast');
 // 	}, function(){
 // 			 		$(this).animate({
 // 			 		paddingLeft: '-=20px',
 // 			 		height: 'show',
 // 			 		opacity: 'show'
 // 			 		}, 'fast');
 // 		}
 // 		);

 // });
//JUST PRACTICING SYNTAX
// $(document).ready(function(){
// 	$("#myDiv").hover(function(){
// 	$(this).animate({my properties, here}, timeinterval);
// 	},
// 	function() {
// 	$(this).animate({my properties, here},timeinterval);

// 	});

// });
//TASK 24 DOWNLOAD COLOR ANIMATE PLUGIN 
//**TROUBLESHOOT THIS, NOT WORKING 

$(document).ready(function(){
 	$('p.localhost').click(function(){
 		$(this).animate({backgroundColor: '#ff9f5f'});
	});

 });
//TASK 25 USING animate AND easing TARGETTING FIRST PARAGRAPH

$(document).ready(function(){

 $('p.localhost').hover(function(){
	 $(this).animate( {
	 		'padding-top': '+=20px'}, 20, 'swing');

	 }, function(){
	 	$(this).animate({
	 		'padding-top' : '-=20px'}, 20, 'swing');

	 });
		
});

//TASK 26 REVIEW  AFTER A FEW DAYS OFF VACATION


$(document).ready(function(){
	$('#intro').mouseover(function(){
		$(this).animate({'padding-bottom': '-10px'  }, 2000);

	}),
	$(this).mouseout(function(){
		$(this).animate({ 'margin-bottom' : '+90px'  }, 7000);
		});

	});
 
//TASK 25 THE easing ACTION

$(document).ready(function(){

	$('.info').hover(function(){

		$(this).animate({'height' : '+200px'}, 2000, 'easeOutElastic');

	});

});

//ANIMATE TO CREATE PANES

$(document).ready(function(){
	$('#bio > div').hide();
	$('#bio > div:first').show();
	
	$('#bio > h3').click(function(){

		$(this).next().animate({ 'height': 'toggle'}, 2000, 'easeOutBounce');
 

	});

});

 
//TASK 27 HIDING AND SHOWING PANES
 $(document).ready(function(){

 	$('#bio > div').hide();
 	$('#bio  > div:first').show();

	 	$('#bio > h3').hover(function(){

	 		$(this).next().animate({'height': 'toggle'}, 'slow' );

	 	});


 });


 
	

///CHAINING

// $(document).ready(function(){

// 	$('.heading').hover(function(){

// 		$(this).next().hide().slideDown('slow').delay(2000).fadeOut();

// 	});


// });

//ANIMATED NAVIGATION, WE ADD A DIV THEN ANIMATE IT
// $(document).ready(function(){

// 	$('<div id="navigation_blob"></div>').css({height: $('#navigation li:first a').height() + 10})
// 		.appendTo('#navigation');//create the div

// 	//now write the function that works on hovering over the li

// 	$('#navigation a').hover(function(){

// 		$(this).mouseover(function(){
// 			$('#navigation_blob').animate({width: $(this).width()+ 10, left: $(this).position().left, easing: 'easeOutBounce' }, 20);
// 		}),
// 		$(this).mouseout(function(){
// 			$('#navigation_blob').animate({width: $(this).width()- 10, left: $('#navigation a:first').position().left, easing: 'easeOutBounce' }, 20);



// 		});

// 	});


// });

//TASK 28 CHAINING EVENTS; creating objects and animating them

$(document).ready(function(){


	//need to create the object
	$('<div id=navigation_blob> </div>').appendTo('#navigation ul li a');
	//position it relative to parent
	// see http://api.jqueryui.com/position/ for all options


	//now write the function that works on hovering over the li
	$('#navigation a').hover(function(){

			$('#navigation  a').mouseover(function(){
				//$('#navigation_blob').animate({'height': '+=120px'}, 'fast');
				$('#navigation_blob').animate(
					{width: $(this).width() + 20, height: $(this).height + 20, left: $(this).position().left }, 'slow');
				
			});
			//this is the first version, solo attempt
			// $('#navigation li').animate({
			// 	height: $(this).height() + 50
			// });
			$('#navigation li').hover(function(){

				$(this).stop(true).animate({height: $(this).height() + 60}, {duration: 500, easing: 'easeOutBounce'});


			});

			$('#navigation  a').mouseout(function(){

				//$('#navigation_blob').animate({'height': '-=120px'}, 'fast');

					$('#navigation_blob')
					.animate({width: $(this).width() + 20, left: $(this).position().left}, 'slow')
					.animate({
						left: $('#navigation a:first').position().left
					});

				$('#navigation li').hover(function(){

				$(this).stop(true).animate({height: '20px'},{duration: 500, easing: 'easeOutCirc'});


			});

				
			});
			// $('#navigation li').animate({
			// 	height: $(this).height()
			// });

		});
	});
////TASK 29 practicing animate with various position parameters

$(document).ready(function(){

	$('.heading').click(function(){
//click on the heading and make the next element move to top of page
		$(this).next().position({ 
			'my' : 'right-top',
			'at' : 'left-bottom',
			'of' : $('#navigation')

		});

	});

});

//practice what was just reviewed


$(document).ready(function(){


	$('.info_three').hide();
//what i want to happen on mouseover
	$('.info_two').mouseover(function(){
		$('.info_three').show();
		$('.info_three').hover(function(){
			
			$(this).animate({
				height: '20px',
				width: '30px',
				backgroundColor: '#036'
			});

		});

});

//what i want to happen on mouseout
	$('.info_two').mouseout(function(){
		$('.info_three').hover(function(){

			$(this).animate({
				height: '100px',
				width: '300px',
				backgroundColor: '#fff'
			});

		});

	});

});

//TOUR OF UI JQIUERY EFFECTS
////TASK 30 -TEST- TAKE FIRST PARAGRAPH, SHAKE IT,  HIGHLIGHT IT AND EXPLODE IT

// $(document).ready(function(){
// 	$('p:first').hover(function(){
//  		$(this).effect('shake', {}).effect('highlight', {}).effect('explode', {});

// 	});

// });
//TASK 31 SCROLL EVENT, trigger something when scroll happens

$(document).ready(function(){

	$('#news_two').scroll(function(){
//disable for now
		//$('<p class="scrolled"> you scrolled</p>').appendTo('.heading');

	});

});

//TASK 32, MAKE THE NAVIGATION BE A FLOATING NAV

// $(document).ready(function(){
// 	//JUST TESTING IT OUT
// 	// $(window).scroll(function(){
// 	// 	$('#navigation').css('top', $(document).scrollTop());
// 	// });
// //TASK 33 IMPLEMENT SCROLL

// // set up the variables
// 	var $window = $(window),
// 		$navigation = $('#navigation');

// //.offset() Get the current coordinates of 
// //the first element in the set of matched elements, relative to the document.
// //The .offset() method allows us to retrieve the current 
// //position of an element relative to the document. 
// //Contrast this with .position(), which retrieves the 
// //current position relative to the offset parent.
// 		$window.scroll(function(){
// 			//$navigation.css('top', $(document).scrollTop());
// 			// if navigation does  not have class of 'fixed' and...
// 			if (!$navigation.hasClass('fixed') && ($window.scrollTop() > $navigation.offset().top))
// 			{
// 					//'data' records the elements intial top property , needed when scrolling back up
// 				$navigation.addClass('fixed').data('top', $navigation.offset().top);
				 

// 			}
// 			else if($navigation.hasClass('fixed') && ($window.scrollTop() < $navigation.data('top')))
// 			{

// 				$(navigation).removeClass('fixed');
				 
// 			}

// 		});


// });
//understanding Offset()

// $(document).ready(function(){
// 	var y = $('#celebs').offset();
// 	alert('top ' + y.top + 'left ' + y.left);

// });
// practice setting class based on offset() and scrollTop
$(document).ready(function(){
//need to bind this to the scroll event
// data method   records what our element’s initial top property is.
	$(window).scroll(function(){

		if  ((!$('#navigation').hasClass('fixed')) && ( ($(window).scrollTop()) > ($('#navigation').offset().top)   ))

		 	{
				$('#navigation').addClass('fixed').data('top', $('#navigation').offset().top);

			}

		else if   
			  (($('#navigation').hasClass('fixed'))  && ( ($(window).scrollTop()) < ($('#navigation').data('top'))) )   

		  		{
					$('#navigation').removeClass('fixed');

				}
		

	});
});

//33 SCROLLING THE DOCUMENT USING ANCHOR TAGS
// reading specs i did it this way....

$(document).ready(function(){

 $('<a href=" # ">Click # Me To Scroll to Top ONE</a>').appendTo('#footer');

	  $('a[href=#]').click(function(){

	  	$(window).scrollTop(10);


	  });


});


//34 SCROLLING THE DOCUMENT USING ANCHOR TAGS
// following book it is done thusly... using the ScrollTo plugin

$(document).ready(function(){

 $('<a href=" # ">Click # Me To Scroll to Top TWO</a>').appendTo('#footer');

	  $('a[href=#]').click(function(event){

	  	$.scrollTo(0, 'slow');//syntax specific to plugin use $.scrollTo()
	  	event.preventDefault();


	  });


});

//35 use of ScrollPane plugin
$(document).ready(function(){
 $('#news_two').jScrollPane ({ verticalGutter: 20   }   );

});
//36 GATHERING INFO ABOUT USER INITIATED WINDOW RESIZING




$(document).ready(function(){
	$(window).resize(function(){

			//alert('you resized');

	});

});

// 37 CREATING A CSS STYLE SWITCHER THAT APPENDS THE wide.css FILE TO THE HEAD OF DOCUMENT

//CREATE A FUNCTION TO create and event upon RESIZE event trigger
//my solo attempt
	// $(document).ready(function(){
	// 	$(window).resize(function(){
	// 		if ( $(window).width() < 500 ) 
	// 	   	{
	// 	   	$('<p class="foo">hello</p>').appendTo('#news');
	// 	  	//alert('less than 500');
	// 		}
	// 		else if ( $(window).width() > 500 ) 
	// 		{
	// 			//alert('more than 500');
	// 		$('.foo').remove();
	// 		}

	// 	});

	// });

	///THIS IS HOW TO DO IT AS PER BOOK

// 	$(document).ready(function(){

// 		styleSheetToggle();
// 		$(window).resize(styleSheetToggle);
		

// 	});

// function styleSheetToggle() {

// if ( $(window).width() < 500 ) 
// 		   	{
// 		   	$('<p class="foo">hello</p>').appendTo('#news');
// 		  	//alert('less than 500');
// 			}
// 			else if ( $(window).width() > 500 ) 
// 			{
// 				//alert('more than 500');
// 			$('.foo').remove();
// 			}
// }
//38 LETS TRY  THIS AGAIN ON MY OWN
$(document).ready(function(){

//WE CALL THE FUNCTION WHEN THE PAGE FIRST LOADS HERE
	styleToggle();
	//WE CALL THE FUNCTION AGAIN WHEN THE PAGE IS RESIZED
	$(window).resize(styleToggle);


});

function styleToggle() {

	if ( $(window).width() < 600 )
	{
	 $('#navigation.fixed').remove();

	}

	else if (  $(window).width > 600)
	{
	 $('#navigation').show();

	}


}
// 39 RESIzABLE  COMPONENTS  on page
// $(document).ready(function(){

//  $('p:first').resizable();


// });

$(document).ready(function(){

 $('textarea').resizable(
 	{
 		grid: [30, 30],
 		minWidth: 150,
 		minHeight: 30,
 		maxHeight: 220,
 		containment: 'parent'



 	});


});

//40 SPLITTER PANES, horizontal
//for vertical simply use height()
//TRY ON MY OWN FIRST
$(document).ready(function(){
	$('#splitter > div:first').resizable();
	$('#tocPane').resize(function(){
		// what is width of parent?
		//subtract width of div first from parent
		//calculate remaining space for div second
		var parentWidth = $(this).parent().width(),//620
		//subtract div one from parent, get remainder is div two
		widthDivTwo =  parentWidth - $(this).outerWidth(),//varies depending on resize
		remainderWidth =  parentWidth   -  (parentWidth  - widthDivTwo),
		remainderPx = remainderWidth + 'px';
		$('#contentPane').css( {width :  remainderPx });
 		console.log(remainderWidth);
	});
// ACCOMPLISHED! NOT PRETTY BUT IT WORKS!

});

//41 CREATE A LIGHTBOX EFFECT THAT DIMS ENTIRE SCREEN WHILE DISPLAYING IMAGE
// FIRST ATTEMPT ON MY OWN, BOOK CODE DIFFERS SLIGHTLY
//only thing i missed, load() As soon as the image has been loaded, the handler is called.
$(document).ready(function(){

$('a.lightbox').click(function(){
	$('<div id="overlay"></div>').appendTo('#container');
	$('<div id="lightbox"></div>').appendTo('#overlay');
	var img = $('<img class="gallery"/>').attr('src', $(this).attr('href'));
	$(img).fadeIn('slow').appendTo('#lightbox');

console.log(img);

	$('#overlay').click(function(){

 		$(this).fadeOut('slow');

	});
	return false;//disables default action of the link
});


});
//42 BEGIN USING THE SHORTCUT FOR $(document).ready(function(){...});
//There’s a quicker way of accessing the same functionality:
//$(function(){...});

//CONTINUE WITH BOOK HERE
//43 USE OF THE JQUERY PLUGIN IN COLORBOX
//use of rel attribute selector
// $(document).ready(function(){
// //calling the colorbox method and grouping images by using attribute selector
// // add rel="celeb" to html
//  $('a.lightbox').colorbox({

//  transition: 'fade',
//  speed: 500,
//  current: "{current} of {total} photos"
//  });
// });

//
//FADER EFFECT FOR IMAGES tied to Hover function
//this can be done with css but this is Jquery way

$(function(){
	 $('#fader img:nth-child(2)').addClass('to');

		 $('#fader').hover(function(){

		 	$(this).find('img:eq(1)').stop(true,true).fadeIn();
		 },
		 function(){

		 	$(this).find('img:eq(1)').fadeOut();

		 });
	 });

// 44 JAVASCRIPT TIMERS
//setTimeout will wait the specified period of time, run the code we give it, and then stop
 //setInterval, on the other hand, will wait, run the code—then wait again and run the code again

$(function(){
	// create the boxes first prepent to news
	  // move the green box with setInterval
	$('<div class="green box"> green box </div>').prependTo('#news');
	$('<div class="red box"> red box</div>').prependTo('#news');
	
    // move the green box with setInterval
  var $green = $('.green'),
    greenLeft = $green.offset().top;
  setInterval(function() {
    $green.css('top', ++greenLeft);
  }, 20);

    
  // move the red box with setTimeout
  // uncertain as to why this is not working
  // var $red = $('.red'),
  //   redLeft = $('.red').offset().left;
  // function moveRed() {
  //   $red.css('left', ++redLeft);
  //   setInterval(moveRed, 10);
  // }


});

 
//45 IMPLEMENTING SLIDESHOW FADE
//SYNTAX a ? b : c means that if a is true, return b; otherwise, return c. 
// $(function(){
// 	//slideShow();
// //look at http://www.khanzek.htpwebdesign.ca/jquery/project/tut_slideshow.html
// 	function slideShow() {

// 		//store current image
// 		 var current = $('#photos img.show');

// 		//store next image
// 		if (current.next().length = 1){
// 			var nextimg = current.next();
// 		} 
		 

// 	 else {
// 		 var nextimg = current.siblings().first();
// 		 }
// 		 // Hide Current Image
// 		 current.hide().removeClass('show');
// 		 // Fade in Next Image
// 		 nextimgß.fadeIn().addClass('show');
// 	}; 

// });

//REVIEW

$(function(){
	slideShow();
});
	function slideShow() {
		//store current image
		var currentimg = $('#photos img.show');
	//var countimg = currentimg.length; this just for testing length
	//alert(countimg);//returns 1 
	//but, if it returns 0 begin at first image and add class .show

			if( currentimg.next().length() == 1 ) {
				var nextimg = currentimg.next();

			}
			else {
				var nextimg = currentimg.siblings().first();
	
			}

			currentimg.hide().removeClass('show');
			nextimg.fadeIn().addClass('show');
		
	setTimeout(slideShow, 9000);	
	};

	
















