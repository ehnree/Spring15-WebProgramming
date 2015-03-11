// lab.js
// Comp20: Lab 6
// Written by: Henry Zhou
// Date: 3/9/15 

function parse(){
	//Step 1: Create new XML obj
	request = new XMLHttpRequest();

	//Step 2: Create or "open" file
	request.open("GET", "data.json", true);

	//Step 3: Set up way to respond to a function
	request.onreadystatechange = parseData;

	// Step 4: Execute request;
	request.send();
}

function parseData(){
	console.log("In parseData" + request.readyState);
	messagesDiv = document.getElementById("messages");
	converted = JSON.parse(request.responseText);
	from = " written by: ";

	//Only edit text once XMLrequest is complete! 
	if (request.readyState == 4) {
		for (i = 0; i < converted.length; i++){
			messagesDiv.innerHTML += "<p>" + converted[i]['content'] + "</p>" 
			+ "<p>" + from + converted[i]['username'] + "</p>";
		}
	}
}