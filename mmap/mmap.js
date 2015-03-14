// mmap.js
// Written by: Henry Zhou
// Date: 3/6/2015

/* Initialize vars and objects (Google map) */ 

var latitude;
var longitude; 
var login = "BenJohnson";
var map;
var R = 6371;


/* get current location */

function findMe() {
	
	if (!navigator.geolocation){
		alert("Geolocation unavailable in your browser!");
		return;
	}
	navigator.geolocation.getCurrentPosition(success, error);
	function success(position) {
		latitude  = position.coords.latitude;
		longitude = position.coords.longitude;
		var mapOptions = {
		zoom: 18,
		center: new google.maps.LatLng(latitude, longitude)
	};

	myLatlng = new google.maps.LatLng(latitude, longitude);
	    map = new google.maps.Map(document.getElementById("map-canvas"),
		mapOptions);

	var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'My Location',
      icon: 'rfh.png'
  	});

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(marker, 'click', (function(marker) {
        	return function() {
          		infowindow.setContent("<p>Login: " + login + "<br/>" + 
          								"Distance: " + 
          								 distance(latitude, longitude) + " miles </p>");
          		infowindow.open(map, marker);
        	}
    })(marker));
	sendMyLocation();
	}

	function error() {
    	alert("Unable to retrieve your location :(");
    };
}

/* send my location to database */

function sendMyLocation(){
	request = new XMLHttpRequest();
	url = "https://secret-about-box.herokuapp.com/sendLocation";
	params = "login=" + login + "&lat=" + latitude + "&lng=" + longitude;
	request.open("POST", url, true);

	//Send request w/ proper header info 
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	request.onreadystatechange = parseData;
	
	request.send(params);
}

/* retrieve locations of people in the class on the map */

function parseData(){
	//Only parse/edit text once XMLrequest is complete! 
	if (request.readyState == 4 && request.status == 200) {
		locations = JSON.parse(request.responseText);

		var infowindow = new google.maps.InfoWindow();

		for (i = 0; i < locations.length; i++) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i]['lat'], locations[i]['lng']),
				map:map
			});	
		
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
        	return function() {
          		infowindow.setContent("<p>Login: " + locations[i]['login'] + "<br/>" + 
          								"Distance: " + 
          								 distance(locations[i]['lat'], locations[i]['lng']) + " miles away</p>");
          		infowindow.open(map, marker);
        	}
      	})(marker, i));
 	   }		
	}
}

function distance(user_lat, user_lng) {
	Number.prototype.toRad = function() {
  	  return this * Math.PI / 180;
	}

	var x1 = latitude-user_lat;
	var dLat = x1 * Math.PI / 180; 
	var x2 = longitude-user_lng;
	var dLon = x2 * Math.PI / 180;  
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
	                Math.cos(latitude.toRad()) * Math.cos(user_lat.toRad()) * 
	                Math.sin(dLon/2) * Math.sin(dLon/2);  
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c * 0.621371; 

	return Math.round(d * 10000) / 10000;
}

