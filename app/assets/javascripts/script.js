//comment here
// TASK 1
//Testing a selection to be sure it exists on page
$(document).ready(function() {
	console.log($('#celebs tr').length + 'elements!');	
});

$(document).ready(function() {
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









