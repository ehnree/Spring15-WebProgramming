// mmap.js
// Written by: Henry Zhou
// Date: 3/6/2015


/* Initialize vars and objects (Google map) */ 
var map;

function initialize() {
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644)
	};
	map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

/* retrive current information */

/* send information to database */

/* retrive locations of people in the class on the map */

/* Display previous information */ 
