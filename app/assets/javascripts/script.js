//comment here
//Testing a selection to be sure it exists on page
$(document).ready(function() {
	console.log($('#celebs tr').length + 'elements!');	
});

$(document).ready(function() {
 console.log($('#celebs tbody tr:even').length + 'even rows in the table');
});

//selectors, this sselects all these
//$('p, div, span, input')

//reading css properties
$(document).ready(function(){
	var fontSize = $('#celebs tbody tr:first').css('font-size');
	var tableRows = ($('#celebs tbody tr').length);
	console.log(fontSize + ' is the font color' + tableRows + ' this number rows')

});

//targetting the css the long way
$(document).ready(function() {
	$('#celebs tbody tr:even').css('background-color', '#dddddd');
	$('#celebs tbody tr:even').css('color', '#039');
});

//targetting css using object literals
$(document).ready(function() {
	$('#celebs tbody tr:odd').css(
		{'background-color':'#000', 
		'color':'#eee'}
		);
});