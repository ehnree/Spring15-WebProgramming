README for Assignment 2
Comp20: Marauder's Map

By: Henry Zhou 
Date: 3/13/15

1) Assignment 2's goal is to use the javascript navigator.geolocation 
object to pinpoint the user's current location by latitude and longitude. 
The location is then pinned onto a map via the Google Maps API. Next,
the location of the user is sent to another datastore API via XML. The data
is transferred via the "POST" HTTP function. In response, the API
replies with the locations and corresponding logins of everyone else
in the server in a JSON. 

Upon successfully completing the XMLHTTPRequest, the JSON response is parsed
through, and markers with their corresponding infowindows are placed on
the google map for every user. InfoWindows include the login of the person
at the location pinned as well as the distance (in miles) that person is
from the user. The distance is calculated via an implementation of the 
Haversine Formula. 

2) Sources that assisted with the completion of this assignment:
	*<http://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript> 
		By user: Talkol. Implementation of the Haversine Formula
	*<https://stackoverflow.com/questions/9713058/sending-post-data-with-a-xmlhttprequest>
		By user: Ed Heal. Implementation of XMLHTTPRequest 
	*<http://stackoverflow.com/questions/3059044/google-maps-js-api-v3-simple-multiple-marker-example>
		By user: Daniel Vassallo. Implementation of markers with Google Maps API

3) Time Spent on this Assignment: 7 Hours
