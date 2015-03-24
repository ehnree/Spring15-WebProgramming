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

4) Reponse to Question:
	
	Generally, it is not possible to request data via XMLHttpRequestfrom a different origin. 
This is dictated by most modern browsers, which implement a same origin policy. 
This policy is enforced to ensure that user security is maintained and protected from
Javascript scripting attacks between websites. An example of such an 
attack includes a website manipulating another tab displaying personal
bank account information. 
	However, same origin policy can be overridden in certain cases, such as 
between mutually reputable websites that are related. This can be done
HTTP access control, or CORS. Not all cross-origin requests are 
dangerous, but they can be. 
	Note, same origin policy is not enforced for all types of
requests. Exceptions include the <script> and <img> tags, which may
fetch resources from any dormain. However, ajax calls such as
XMLHttpRequests aren't commonly supported with cross-origin
policies. 
	Lastly, cross-domain requests for local files are also
generally prohibited for ajax calls. Fun fact: this CAN
be performed on Google Chrome by via the switch:
		--allow-file-access-from-files
on the command line. 
