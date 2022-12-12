/*function addSongs() {
	var song1 = document.getElementById("song1");
	var song2 = document.getElementById("song2");
	var song3 = document.getElementById("song3");
	song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
	song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
	song3.innerHTML = "I Code the Line, by Johnny JavaScript";
}
window.onload = addSongs;*/
var colorRed = document.getElementById("song1");
colorRed.setAttribute("class", "redText");

var scoop = document.getElementById("song1");
var altText = scoop.getAttribute("class");
if (altText == null) {
	console.log("Oh, I guess there isn't an alt attribute.");
} else {
	console.log("I can't see the image in the console,");
	console.log(" but I'm told it looks like " + altText);
}