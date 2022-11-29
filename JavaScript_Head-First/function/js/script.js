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

//=======================================

function bake(degrees) {
	var message;
	if (degrees > 500) {
		message = "I'm not a nuclear reactor!";
	} else if (degrees < 100) {
		message = "I'm not a refrigerator!";
	} else {
		message = "That's a very comfortable temperature for me.";
		//setMode("bake");
		//setTemp(degrees);
	}
	return message;
}
var status = bake(350);
console.log(status);

//=======================================

function calculateArea(r) {
	var area;
	if (r <= 0) {
		return 0;
	} else {
		area = Math.PI * r * r;
		return area;
	}
}
var radius = 5.2;
var theArea = calculateArea(radius);
console.log("The area is: " + theArea);

//=======================================
// Факториал числа n thingamajig(n);

function clunk(times) {
	var num = times;
	while (num > 0) {
		display("clunk");
		num = num - 1;
	}
}
function thingamajig(size) {
	var facky = 1;
	clunkCounter = 0;
	if (size == 0) {
		display("clank");
	} else if (size == 1) {
		display("thunk");
	} else {
		while (size > 1) {
			facky = facky * size;
			size = size - 1;
		}
		clunk(facky);
	}
}
function display(output) {
	console.log(output);
	clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);

//=======================================

var balance = 10500;
var cameraOn = true;
function steal(bal, amount) {
	cameraOn = false;
	if (amount < balance) {
		balance = bal - amount;
	}
	cameraOn = true;
	return amount;
}
var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "$" + "!" + " cameraOn: " +
cameraOn + " " + "balance: " + balance );