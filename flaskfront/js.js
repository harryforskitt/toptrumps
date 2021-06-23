function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}




function displayCard(number){
	url="http://harryforskitt.com:5000/getcard/".concat(number);
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
	console.log("playcard")
	url="http://harryforskitt.com:5000/play/".concat(attribute).concat("/").concat(player);
	console.log(url)
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
	computerCards();
	playerCards();
};

function computerPlay(){
	var player = '0';
	var attribute = getRandomInt(5);
	url="http://harryforskitt.com:5000/play/".concat(attribute).concat("/").concat(player);
	console.log(url)
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
	computerCards();
	playerCards();
};

function playerCards(){
	var player = '0';
	var attribute = getRandomInt(5);
	url="http://harryforskitt.com:5000//playercards/0";
	console.log(url)
	fetch(url).then(function (response) {
		// The API call was successful!
		return response.text();
	}).then(function (data) {
		// This is the JSON from our response
		console.log(data);
		document.getElementById("playerCards").innerHTML = data;
		return(data);
	}).catch(function (err) {
		// There was an error
		console.warn('Something went wrong.', err);
	})
};

function computerCards(){
	var player = '0';
	var attribute = getRandomInt(5);
	url="http://harryforskitt.com:5000//playercards/1";
	console.log(url)
	fetch(url).then(function (response) {
		// The API call was successful!
		return response.text();
	}).then(function (data) {
		// This is the JSON from our response
		console.log(data);
		document.getElementById("computerCards").innerHTML = data;
		return(data);
	}).catch(function (err) {
		// There was an error
		console.warn('Something went wrong.', err);
	})
};