README for Lab 6
Comp 20
Written by: Henry Zhou
Date: 3/10/15 

1) lab.js contains the javascript to parse through the JSON stored in 
data.json. The function parse() is called upon loading of the body in
index.html. parse() creates a new XMLHttpRequest object to "GET" the
json file data.json.
	Upon making the open request, parse() calls parseData() everytime 
the state of the request changes. However, it is important that the JSON
is parsed and inserted the HTML once the XML request is finished. To 
ensure this happens, parseData() only parses through data.json if the
conditional that request.readystate == 4. If request.readystate == 4, then
the request has been completed and it is ok to start parsing through the
data.  
	Both the .json files, data.json and messages.json, are correctly 
implemented and messages displays both the message and the author of
every object stored in the json. 

2) People that contributed to this assignment:
	Ming Chow
	Rebecca Larson 

3) Time spent on this assignment: 1 hour
