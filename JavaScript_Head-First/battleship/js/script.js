var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc, location2 = randomLoc + 1, location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			hits = hits + 1;
			alert("HIT!");
			if (hits == 3) {
				isSunk = true;
			}
		}
		else {
			alert("MISS");
		}
	}
}
alert("Корабль потоплен! Колличество выстрелов " + guesses + ".");