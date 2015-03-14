// mmap.js
// Written by: Henry Zhou
// Date: 3/6/2015

/* Initialize vars and objects (Google map) */ 

var latitude;
var longitude; 
var login = "BenJohnson";
var map;

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
	    map = new google.maps.Map(document.getElementById("map-canvas"),
		mapOptions);
	console.log("map created");

	var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'My Location',
      icon: 'rfh.png'
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
	console.log(url);
	request.open("POST", url, true);

	//Send request w/ proper header info 
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	request.onreadystatechange = parseData;
	
	request.send(params);
}

/* retrieve locations of people in the class on the map */

function parseData(){
	console.log("In parseData: " + request.readyState);
	//Only parse/edit text once XMLrequest is complete! 
	if (request.readyState == 4 && request.status == 200) {
		locations = JSON.parse(request.responseText);
		console.log(locations);
		for (i = 0; i < locations.length; i++) {
			//console.log(locations[i]['login']);
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i]['lat'], locations[i]['lng']),
				map:map
			});
		}		
	}
}

/* Display previous information */ 

