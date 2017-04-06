function validate() { //code for zip code validation
	var zip = $("#zipcode").val()
	if (isNaN(zip) && zip.length != 0) { // if the field is not empty and has non-number chars
		alert("Your zip code has invalid format. Please make sure you enter digits!");
		return false;
	}
	else if (!(isNaN) && zip.length != 5) { // if the field consists only of numbers, but their number is too low/high
		alert("Your zipcode length is not right, please try again!");
		return false;
	}
}

// tab function: taken from https://www.w3schools.com/howto/howto_js_tabs.asp, 04/02/2017

function openLocation(evt, locName) { // responsible for functioning tabs!
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(locName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(function(){ 

	// graph of working hours for Downtown!
	// adapted from http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/pie-donut/
	// 04/02/2017

		$("#container-graphD").highcharts({
			
			chart: {
        		type: 'column'
    		},

			title: {
		        text: 'Popular Hours'
		    },

		    yAxis: {
		        title: {
		            text: 'Busyness'}},

		    xAxis: {
		        title: { text: 'Hours'},
		        categories: ['7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '4PM', '5PM', '6PM']},

		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle'},

		    tooltip: {
		    	valueSuffix: ' customers'},

		    series: [{
		        name: 'Monday - Friday',
		        data: [2, 5, 7, 10, 12, 14, 14, 11, 9, 6, 4]}, 
		        { name: 'Saturday',
		        data: [0, 0, 5, 10, 11, 12, 18, 24, 13, 0, 0]}, 
		        { name: 'Sunday',
		        data: [0, 0, 0, 9, 10, 12, 16, 18, 0, 0, 0]}]
		})


		$("#container-graphS").highcharts({ 

		// graph of working hours for Shadyside!
		// adapted from http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/pie-donut/
		// 04/02/2017
			
			chart: {
        		type: 'column'
    		},

			title: {
		        text: 'Popular Hours'
		    },

		    yAxis: {
		        title: {
		            text: 'Busyness'}},

		    xAxis: {
		        title: { text: 'Hours'},
		        categories: ['7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '4PM', '5PM', '6PM']},

		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle'},

		    series: [{
		        name: 'Monday',
		        data: [0,0,10,10,8,7,6,6,7,0,0,0,0]}, 
		        { name: 'Tuesday - Saturday',
		        data: [7,9,11,13,11,11,8,6,6,6,8]}, 
		        { name: 'Sunday',
		        data: [0,0,12,11,9,11,13,9,8,0,0,0,0]}]
		})

		
	})

// code for a slideshow: taken from https://www.w3schools.com/howto/howto_js_slideshow.asp; 04/02/2017

var slideIndex = 1; // show the first slide by default!
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) { // show the nth slide
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}




