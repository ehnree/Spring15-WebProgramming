// mmap.js
// Written by: Henry Zhou
// Date: 3/6/2015


/* Initialize vars and objects (Google map) */ 

var latitude;
var longitude; 

function initialize() {
	console.log("in initialize");
	findMe();
	console.log("finished findMe");

	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(latitude, longitude)
	};

	var map = new google.maps.Map(document.getElementById("map-canvas"),
		mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

/* get current location */

function findMe() {
	console.log("running findMe");
	if (!navigator.geolocation){
		console.log("Geolocation unavailable in your browser!");
		return;
	}
	navigator.geolocation.getCurrentPosition(success, error);
	function success(position) {
		latitude  = position.coords.latitude;
		longitude = position.coords.longitude;
		console.log("Lat: " + latitude);
		console.log("Long: " + longitude);
	}

	function error() {
    	console.log("Unable to retrieve your location");
    };

}



/* retrieve current information */

/* send information to database */

/* retrive locations of people in the class on the map */

/* Display previous information */ 
