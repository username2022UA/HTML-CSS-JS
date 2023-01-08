/*window.onload = pageLoadedHandler;
function pageLoadedHandler() {
	alert("I'm alive!");
}
*/

window.onload = init;
function init() {
	var image = document.querySelectorAll('.img');
	var map = document.getElementById("map");
	map.onmousemove = showCoords;
	//map.onmouseout = showRemove;
	map.addEventListener("mouseout", showRemove);
	for (let i = 0; i < image.length; i++) {
		//image[i].onclick = showAnswer;
		image[i].onmousemove = showAnswer;
		image[i].onmouseout = showBlur;
	}
}

function showAnswer(eventObj) {
	var image = eventObj.target;
	image.src = "img/" + image.id + ".jpg";
	/*setTimeout(() => {
		image.src = "img/" + image.id + "blur" + ".jpg";
	}, 2000);*/
}

function showBlur(eventObj) {
	var image = eventObj.target;
	image.src = "img/" + image.id + "blur" + ".jpg";
}

function showCoords(eventObj) {
	var map = document.getElementById("coords");
	var x = eventObj.pageX;
	var y = eventObj.pageY;
	map.innerHTML = "Map coordinates: " + x + ", " + y;
}

function showRemove() {
	var map = document.getElementById("coords");
	map.innerHTML = "Map coordinates...";
}

function timerHandler() {
	alert("Hey what are you doing just sitting there staring at a blank screen?");
}

//setTimeout(timerHandler, 5000);

var addOne = function (x) {
	return x + 1;
};
var six = addOne(5);
console.log(six);

window.onload = function () {
	//alert("The page is loaded!");
}
/*
var tick = true;
function ticker() {
	if (tick) {
		console.log("Tick");
		tick = false;
	} else {
		console.log("Tock");
		tick = true;
	}
}
setInterval(ticker, 1000);
*/