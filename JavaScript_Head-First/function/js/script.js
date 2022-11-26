function bark(dogName, dogWeight) {
	if (dogWeight > 20) {
		console.log(dogName + " says WOOF WOOF");
	} else {
		console.log(dogName + " says woof woof");
	} 
}
bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);
bark("fido", "20");

//=======================================

function whatShallIWear(temp) {
	if (temp < 60) {
		console.log("Wear a jacket");
	} else if (temp < 70) {
		console.log("Wear a sweater");
	} else {
		console.log("Wear t-shirt");
	}
}
whatShallIWear(80);
whatShallIWear(60);
whatShallIWear(50);

//=======================================

function doIt(param) {
	param = 2;
}
var test = 1;
doIt(test);
console.log(test);

