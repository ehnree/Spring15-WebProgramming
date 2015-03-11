// Your JavaScript goes here...

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
	messagesDiv = document.getElementById("messages");
	converted = JSON.parse(request.responseText);
	for (i = 0; i < converted.length; i++){
		messagesDiv.innerHTML += "<p>" + converted[i]['content'] + "</p>"
	}
}