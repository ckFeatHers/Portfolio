$(document).ready(function() {
	
	$("#nameSet").controlgroup();
	
	/* Assignment 11 jQ Plugin: Quicksand
		ckFeatHers/quicksand
		Forked from razorjack/quicksand
		jQuery plugin. Reorder and filter items with a nice shuffling animation.
		JavaScript
		363 Updated on Nov 10, 2017 
		https://razorjack.net/quicksand/
	  */
$(function() {
  $('#nameSet a.button').click(function(e) {
    $.get( $(this).attr('href'), function(data) {
        $('.grid').quicksand( $(data).find('li'), { adjustHeight: 'dynamic' } );
    });  
    e.preventDefault();  
  });
});	
	
	// childIndex.html
	$("#choice").on("click", function() {
		$("#temp").quicksand( $("#byAZ li") );
	});	
	// childIndex.html
	$("#choice1").on("click", function() {
		$("#temp").quicksand( $("#byYR li") );
	});
	// index.html 
	$("#choiceFa").on("click", function() {
		$("#temp").quicksand( $("#byFa li") );
	});	
		
	// childIndex.html
	$("#moments").controlgroup();
	$("#showL").button();
	$("#tabs").tabs();
	$("#child").autocomplete({ 
		source: ["Peter ", "Winnie ", "Elias ", "Cathy ", "Aleighya ", 
			"Abigail ", "Annie ", "Gus ", "Bethany ","Evangelina ", 
			"Nicholas "]});
		
	$( "#moment" ).autocomplete({
		source: ["Shepherd ", "Psalm 23 ", "Geography ", 
			"Parables "]});
				
	
	/* Assignment 11 jQ Plugin: Table Sorter
		ckFeatHers/tablesorter
		Forked from Mottie/tablesorter
		Github fork of Christian Bach's tablesorter plugin + awesomeness ~
		JavaScript
		630 Updated 25 days ago 
		tutorial http://ncis.anu.edu.au/_lib/jquery_tablesorter/docs/index.html
	*/
	$("#levelOne").tablesorter({
	widgets: ["zebra", "filter"]
	});
	
				
	// Collect lessons  
	$("button#showL").on("click", function() {	
		
		let x = $("form#moments").serializeArray();
		let done = $("#com input:checked").attr("value");
		if( done == "Yes") {
			$("#levelOne tbody").append("<tr>");
			$("#levelOne tbody").append("<td>" + x[0].value + "</td>" +
											"<td>" + x[1].value + "</td>" +
											"<td>Completed</td>");				
			$("#levelOne tbody").append("</tr>");
		} else {
			$("#levelOne tbody").append("<tr>");
			$("#levelOne tbody").append("<td>" + x[0].value + "</td>" +
											"<td>" + x[1].value + "</td>" +
											"<td>Missed</td>");				
			$("#levelOne tbody").append("</tr>");
		}

	});
	
});	

		
		


