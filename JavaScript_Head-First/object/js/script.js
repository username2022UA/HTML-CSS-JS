var cadi = {
	make: "Cadillac",
	model: "GM",
	year: 1955, 
	color: "tan",
	mileage: 12892,
	passengers: 5,
	flipTop: false
};
console.log(cadi);
if (cadi.mileage > 10000) {
	console.log(cadi.mileage);
}
cadi.color = "red";
console.log(cadi.color);

var dog = {
	name: "Fido",
	age: 4,
	weight: 20.2,
	breed: "mixed",
	activity: "fetch balls"
};
var bark;
if (dog.age > 20.2) {
	bark = "WOOF WOOF";
} else {
	bark = "woof woof";
};
var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);

var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341
};
function prequal(car) {
	if (car.mileage > 10000) {
		return false;
	} else if (car.year > 1960) {
		return false;
	}
	return true;
}
var worthALook = prequal(taxi);
if (worthALook) {
	console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
	console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

function loseWeight(dog, amount) {
	dog.weight = dog.weight - amount;
}
loseWeight(dog, 10);
//alert(dog.name + " now weighs " + dog.weight);

console.log(dog);

//=========================================

function getSecret(file, secretPassword) {
	file.opened = file.opened + 1;
	if (secretPassword == file.password) {
		return file.contents;
	}
	else {
		return "Invalid password! No secret for you.";
	}
}
function setSecret(file, secretPassword, secret) {
	if (secretPassword == file.password) {
		file.opened = 0;
		file.contents = secret;
	}
}
var superSecretFile = {
	level: "classified",
	opened: 0,
	password: 2,
	contents: "Dr. Evel's next meeting is in Detroit."
};
var secret = getSecret(superSecretFile, 2);
console.log(superSecretFile);
console.log(secret);
setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);

//============================================

function makeCar() {
	var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
	var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
	var years = [1955, 1957, 1948, 1954, 1961];
	var colors = ["red", "blue", "tan", "yellow", "white"];
	var convertible = [true, false];
	var rand1 = Math.floor(Math.random() * makes.length);
	var rand2 = Math.floor(Math.random() * models.length);
	var rand3 = Math.floor(Math.random() * years.length);
	var rand4 = Math.floor(Math.random() * colors.length);
	var rand5 = Math.floor(Math.random() * 5) + 1;
	var rand6 = Math.floor(Math.random() * 2);
	var car = {
		make: makes[rand1],
		model: models[rand2],
		year: years[rand3],
		color: colors[rand4],
		passengers: rand5,
		convertible: convertible[rand6],
		mileage: 0
	};
	return car;
}
function displayCar(car) {
	console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}
var carToSell = makeCar();
displayCar(carToSell);

//=====================================

var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	drive: function() {
		console.log("Zoom zoom!");
	}
};
fiat.drive();

var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: true,
	start: function () {
		started = true;
	},
	stop: function () {
		started = false;
	},
	drive: function () {
		if (started) {
			alert("Zoom zoom!");
		} else {
			alert("You need to start the engine first.");
		}
	}
};