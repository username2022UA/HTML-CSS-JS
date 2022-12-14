var x;
if (x == undefined) {
	console.log("Переменная x не инициализирована! Принять меры!");
}
var customer = {
	name: "Jenny"
};
if (customer.phoneNumber == undefined) {
	console.log("Получить телефон клиента");
}

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = { "abcdef": 123 };
var test8 = ["abcdef", 123];
function test9() { return "abcdef" };
console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);

var test10 = null;
console.log(typeof test10);

var header = document.getElementById("header");
if (header == null) {
	console.log("Заголовка нет — какая-то серьезная проблема!");
}
var weather = document.getElementById("weatherDiv");
if (weather != null) {
	console.log("Создание содержимого для погодного виджета");
}

var a = 0 / 0;
var b = "food" * 1000;
var c = Math.sqrt(-9);
console.log(a, b, c);


//if (isNaN(myNum)) { // функция проверки на NaN
//	myNum = 0;
//}

var test11 = 0 / 0;
console.log(typeof test11);

if (99 == "99") {
	console.log("A number equals a string!");
} else {
	console.log("No way a number equals a string");
}

function findCarInLot(car) {
	for (var i = 0; i < lot.length; i++) {
		if (car === lot[i]) {
			return i;
		}
	}
	return -1;
}
var chevy = {
	make: "Chevy",
	model: "Bel Air"
};
var taxi = {
	make: "Webville Motors",
	model: "Taxi"
};
var fiat1 = {
	make: "Fiat",
	model: "500"
};
var fiat2 = {
	make: "Fiat",
	model: "500"
};
var lot = [chevy, taxi, fiat1, fiat2];
var loc1 = findCarInLot(fiat2);
var loc2 = findCarInLot(taxi);
var loc3 = findCarInLot(chevy);
var loc4 = findCarInLot(fiat1);
console.log(loc1);
console.log(loc2);
console.log(loc3);
console.log(loc4);

//===================================

function lieDetectorTest() {
	var lies = 0;
	var stolenDiamond = {};
	if (stolenDiamond) {
		console.log("You stole the diamond");
		lies++;
	}
	var car = {
		keysInPocket: null
	};
	if (car.keysInPocket) {
		console.log("Uh oh, guess you stole the car!");
		lies++;
	}
	if (car.emptyGasTank) {
		console.log("You drove the car after you stole it!");
		lies++;
	}
	var foundYouAtTheCrimeScene = [];
	if (foundYouAtTheCrimeScene) {
		console.log("A sure sign of guilt");
		lies++;
	}
	if (foundYouAtTheCrimeScene[0]) {
		console.log("Caught with a stolen item!");
		lies++;
	}
	var yourName = " ";
	if (yourName) {
		console.log("Guess you lied about your name");
		lies++;
	}
	return lies;
}
var numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
	console.log("Guilty as charged");
}

//=======================

var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
var presentableText = text.toLowerCase();
if (presentableText.length > 0) {
	//alert(presentableText);
}

var leter;
console.log(typeof leter);
var mass = [];
console.log(typeof mass[0]);
var object1 = {};
console.log(typeof object1.name);

//=================================

var emot = "XOxxOO";
var hugs = 0;
var kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();
for (var i = 0; i < emot.length; i++) {
	if (emot.charAt(i) === "X") {
		hugs++;
	} else if (emot.charAt(i) == "O") {
		kisses++;
	}
}
console.log(hugs + " " + kisses)

//============================

var data = "name|phone|address";
var val = data.substring(5, 10);
console.log("Substring is " + val);
val = data.substring(5);
console.log("Substring is now " + val);

//=============================

function validate1(phoneNumber) {
	if (phoneNumber.length > 8 || phoneNumber.length < 7) {
		return false;
	}
	for (var i = 0; i < phoneNumber.length; i++) {
		if (i === 3) {
			if (phoneNumber.length === 8 && phoneNumber.charAt(i) !== '-') {
				return false;
			} else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
				return false;
			}
		} else if (isNaN(phoneNumber.charAt(i))) {
			return false;
		}
	}
	return true;
}

//=============================


//=============================

function validate(phoneNumber) {
	if (phoneNumber.length > 8 ||
		phoneNumber.length < 7) {
		return false;
	}
	var first = phoneNumber.substring(0, 3);
	var second = phoneNumber.substring(phoneNumber.length - 4);
	if (isNaN(first) || isNaN(second)) {
		return false;
	}
	if (phoneNumber.length === 8) {
		return (phoneNumber.charAt(3) === "-");
	}
	return true;
}

//=============================

function validate(phoneNumber) {
	if (phoneNumber.length <= 8 || phoneNumber.length >= 7) {
		if (phoneNumber.length === 7 && isNaN(phoneNumber) === false) {
			console.log(phoneNumber);
			return true;
		}
		if (phoneNumber.length === 8 && (phoneNumber.charAt(3) === "-")) {
			console.log(phoneNumber);
			return true;
		}
	} else {
		return false
	}
}
validate("123-4567");

//====================

//====================

function validate2(phoneNumber) {
	if (phoneNumber.match(/^\d{3}-?\d{4}$/)) {
		console.log(phoneNumber);
		return true;
	}
	
}
validate2("123-4567");

var data = "name|phone|address";
var vals = data.split("|");
console.log("Split array is ", vals);

//===================================

function Duck(sound) {
	this.sound = sound;
	this.quack = function () { console.log(this.sound); }
}
var toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);