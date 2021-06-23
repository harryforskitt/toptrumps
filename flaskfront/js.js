function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}




function displayCard(player){
	url="http://harryforskitt.com:5000//playercard/".concat(player);
	fetch(url).then(function (response) {
		// The API call was successful!
		return response.text();
	}).then(function (data) {
		// This is the JSON from our response
		data=data.split(",");
		console.log(data);
		document.getElementById("pcname").innerHTML = data[0];
		document.getElementById("pcdpsec").innerHTML = data[2];
		document.getElementById("pcdpshot").innerHTML = data[3];
		document.getElementById("pcfirerate").innerHTML = data[4];
		document.getElementById("pcmagsize").innerHTML = data[5];
		document.getElementById("pcrating").innerHTML = data[6];
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
	displayCard('0');
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
		computerCards();
		playerCards();
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
	displayCard('0');
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

displayCard('0');
computerCards();
playerCards();