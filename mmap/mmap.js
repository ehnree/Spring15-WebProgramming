// mmap.js
// Written by: Henry Zhou
// Date: 3/6/2015

/* Initialize vars and objects (Google map) */ 

var latitude; //= 42.407455;
var longitude; //= -71.1208;
var login = "BenJohnson";

function initialize() {
	console.log("in initialize");


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
		console.log("finished findMe");
		var mapOptions = {
		zoom: 18,
		center: new google.maps.LatLng(latitude, longitude)
	};

	myLatlng = new google.maps.LatLng(latitude, longitude);
	var map = new google.maps.Map(document.getElementById("map-canvas"),
		mapOptions);
	console.log("map created");

	var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  	});
  	
	sendMyLocation();
	}

	function error() {
    	console.log("Unable to retrieve your location");
    };
}

/* send my location to database */

function sendMyLocation(){
	request = new XMLHttpRequest();
	url = "https://secret-about-box.herokuapp.com/sendLocation";
	params = "login=" + login + "&lat=" + latitude + "&lng=" + longitude;
	console.log(params);
	request.open("POST", url, true);

	//Send request w/ proper header info 
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	request.send(params);
}

/* retrieve locations of people in the class on the map */

/* Display previous information */ 
