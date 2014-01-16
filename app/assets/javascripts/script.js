//comment here
// TASK 1
//Testing a selection to be sure it exists on page
$(document).ready(function(){
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

$(document).ready(function(){
	$('#thisTest').click(function(){
		$(this).hide();

	});


});

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

// TASK 20 USING MOUSEOUT AND MOUSEOVER, ATTEMPT TWO

$(document).ready(function(){

	$('#celebs tr').mouseover(function(){
		$(this).addClass('zebrahover');
	});
	$('#celebs tr').mouseout(function(){
		$(this).removeClass('zebrahover');
	});



});



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









