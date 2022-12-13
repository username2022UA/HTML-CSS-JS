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