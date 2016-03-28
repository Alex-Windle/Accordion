// Javascript Entry Point
import $ from 'jquery';

$('h3').on('click', function(event){

	$('.section').addClass('hidden');

	var h3=event.currentTarget;
	var $h3=$(h3);

	$h3.parent().removeClass('hidden');

});
