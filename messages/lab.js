/* COMP 20 Lab 6
   Flora Liu
   March 8, 2016
*/

function parse() {
	// Step 1: Make request
	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);
	request.send(null);

	// Step 2: Handle response
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			raw = request.responseText;
			theMessageData = JSON.parse(raw);
			console.log(theMessageData);
			elem = document.getElementById("messages");
			for (i = 0; i < theMessageData.length; i++) {
				elem.innerHTML += "<p>" + theMessageData[i]["content"] + " " + theMessageData[i]["username"] + "</p>";
			}
		}
	}
}