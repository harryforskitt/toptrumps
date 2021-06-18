
function displayCard(number){
url="http://localhost:5000/getcard/".concat(number);
fetch(url).then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
	document.getElementById("cardInfo").innerHTML = data;
	return(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
})
};

function playCard(attribute, player){
	url="http://localhost:5000/play/".concat(attribute).concat("/").concat(player);
	fetch(url).then(function (response) {
		// The API call was successful!
		return response.text();
	}).then(function (data) {
		// This is the JSON from our response
		console.log(data);
		document.getElementById("winner").innerHTML = data;
		return(data);
	}).catch(function (err) {
		// There was an error
		console.warn('Something went wrong.', err);
	})
	};



var getCardButton = document.getElementById("getCardButton");
getCardButton.addEventListener("click", displayCard("0"));

var dpsecButton = document.getElementById("dpsec");
getCardButton.addEventListener("click", playCard("0", "0"));

var dpsecButton = document.getElementById("dpshot");
getCardButton.addEventListener("click", playCard("1", "0"));

var dpsecButton = document.getElementById("firerate");
getCardButton.addEventListener("click", playCard("2", "0"));

var dpsecButton = document.getElementById("magsize");
getCardButton.addEventListener("click", playCard("3", "0"));

var dpsecButton = document.getElementById("rating");
getCardButton.addEventListener("click", playCard("4", "0"));