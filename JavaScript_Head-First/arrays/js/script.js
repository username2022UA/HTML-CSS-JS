var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var last = products.length - 1;
console.log(products[last]);

// Генератор случайных фраз
function makePhrases() {
	var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
	var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
	var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
	var rand1 = Math.floor(Math.random() * words1.length);
	var rand2 = Math.floor(Math.random() * words2.length);
	var rand3 = Math.floor(Math.random() * words3.length);
	var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
	alert(phrase);
}
makePhrases();

//===============================================================
/*
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
	34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
	46, 31, 57, 52, 44, 18, 41, 53, 55, 69, 51, 44];
var maxCounter = 0;
var scoresMax = []; // Массив с номерами наибольших значений
var testCounter = 0;
var namberMax = 0;
var n = -1;
while (testCounter < scores.length) {
	var output = "Bubble solution #" + testCounter + " score: " + scores[testCounter];
	console.log(output);
	if (scores[testCounter] > namberMax) {
		namberMax = scores[testCounter];
		scoresMax[n] = testCounter;
	} else if (scores[testCounter] == namberMax) {
		n++;
		scoresMax[n] = testCounter;
	}
	testCounter++;
}
console.log("Bubbles tests: " + testCounter);
console.log("Highest bubble score: " + namberMax);
console.log("Solutions with highest score: ");
while (maxCounter < scoresMax.length) {
	console.log("#" + scoresMax[maxCounter] + ",");
	maxCounter++;
}
*/
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
	34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
	46, 31, 57, 52, 44, 18, 41, 53, 55, 69, 51, 44];
for (var i = 0; i < scores.length; i++) {
	var output = "Bubble solution #" + i + " score: " + scores[i];
	console.log(output);
}

//===============================================================

var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
/*var i = 0;
while (i < hasBubbleGum.length) {
	if (hasBubbleGum[i]) {
		console.log(products[i] + " contains bubble gum");
	}
	i++;
}*/

for (var i = 0; i < hasBubbleGum.length; i++) {
	if (hasBubbleGum[i]) {
		console.log(products[i] + " contains bubble gum");
	}
}

//===============================================================
/*
var i = 0;
while (i < products.length) {
	gum = "Bubble solution #" + i + " score: " + products[i];
	console.log(gum);
	i++;
}
*/
//===============================================================

for (var i = 0; i < products.length; i++) {
	gum = "Bubble solution #" + i + " score: " + products[i];
	console.log(gum);
}

//===============================================================



//===============================================================