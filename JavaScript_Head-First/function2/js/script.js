/*var winner = function () { console.log("WINNER!") };
var loser = function () { console.log("LOSER!") };
// Простой тест
winner();
// Присваивание ссылок переменным
var a = winner;
var b = loser;
var c = loser;
a();
b();
// Проверяем удачу в игре “наперстки”
c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a();
*/

var passengers = [
	{ name: "Jane Doloop", paid: true, ticket: "coach" },
	{ name: "Dr. Evel", paid: true, ticket: "firstclass" },
	{ name: "Sue Property", paid: false, ticket: "firstclass" },
	{ name: "John Funcall", paid: true, ticket: "second" }
];

var paidList = function (list) {
	for (let i = 0; i < list.length; i++) {
		if (list[i].paid) {
			console.log(list[i].name);
		}
	}
}
paidList(passengers);

var passengerList = function (list) {
	for (let i = 0; i < list.length; i++) {
		console.log(list[i].name);
	}
}
passengerList(passengers);

function blackList(passenger) {
	if (!passenger.paid) {
		console.log("hello mister " + passenger.name);
		return true;
	}
	return false;
}

function checkNoFlyList(passenger) {
	if (passenger.name === "Dr. Evel") {
		console.log("Hello " + passenger.name);
	}
}

function checkNotPaid(passenger) {
	if (!passenger.paid) {
		console.log("hello " + passenger.name);
		return true;
	}
	return false;
}

function processPassengers(passengers, testFunction) {
	for (let i = 0; i < passengers.length; i++) {
		testFunction(passengers[i])
	}
	return true;
}
processPassengers(passengers, checkNotPaid);
processPassengers(passengers, blackList);
processPassengers(passengers, checkNoFlyList);

function printPassenger(passenger) {
	if (passenger.paid) {
		console.log(passenger.name + " paid");
	} else {
		console.log(passenger.name + " not paid");
	}
}
processPassengers(passengers, printPassenger);

//==============================

function fun(echo) {
	console.log(echo);
};
fun("hello");
function boo(aFunction) {
	aFunction("boo");
}
boo(fun);
console.log(fun);
fun(boo);
var moreFun = fun;
moreFun("hello again");
function echoMaker() {
	return fun;
}
var bigFun = echoMaker();
bigFun("Is there an echo?");

//=================================

function createDrinkOrder(passenger) {
	var orderFunction;
	if (passenger.ticket === "firstclass") {
		orderFunction = function () {
			alert("Would you like a cocktail or wine?");
		};
	} else if (passenger.ticket === "second") {
		orderFunction = function () {
			alert("Your choice is wine, cola or water.");
		}
	} else {
		orderFunction = function () {
			alert("Your choice is cola or water.");
		};
	}
	return orderFunction;
}

function createLunchkOrder(passenger) {
	var orderFunction;
	if (passenger.ticket === "firstclass") {
		orderFunction = function () {
			alert("Do you want for lunch a chiken or a pasta?")
		};
	} else if (passenger.ticket === "second") {
		orderFunction = function () {
			alert("Do you want appetizers or a cheese plate?");
		}
	} else {
		orderFunction = function () {
			alert("Do you want nuts or crackers?");
		};
	}
	return orderFunction;
}

function serveCustomer(passenger) {
	var getDrinkOrderFunction = createDrinkOrder(passenger);
	var getLunchOrderFunction = createLunchkOrder(passenger);
	getDrinkOrderFunction();
	// Предложить обед
	getLunchOrderFunction();
	// Включить кино
	//getDrinkOrderFunction();
}

function servePassengers(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		serveCustomer(passengers[i]);
	}
}
//servePassengers(passengers);

//=====================================

function addN(n) {
	var adder = function (x) {
		return n + x;
	};
	return adder;
}
var add2 = addN(2);
console.log(add2(10));
console.log(add2(100));

//======================================

var numbersArray = [60, 50, 62, 58, 54, 54]; 
//var newArray = numbersArray.sort();
//console.log(newArray);

function compareNumbers(num1, num2) {
	if (num1 > num2) {
		return 1;
	} else if (num1 === num2) {
		return 0;
	} else {
		return -1;
	}
}

function compareNumbersDesc(num1, num2) {
	if (num1 < num2) {
		return 1;
	} else if (num1 === num2) {
		return 0;
	} else {
		return -1;
	}
}

numbersArray.sort(compareNumbers);
console.log(numbersArray);
numbersArray.sort(compareNumbersDesc);
console.log(numbersArray);

var products = [
	{ name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
	{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
	{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
	{ name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
	{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
	{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
	{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
	{ name: "Water", calories: 0, color: "clear", sold: 62123 }
];
function compareSold(colaA, colaB) {
	if (colaA.sold > colaB.sold) {
		return 1;
	} else if (colaA.sold === colaB.sold) {
		return 0;
	} else {
		return -1;
	}
	//  Или просто return num1 - num2;
}
function compareCalories(colaA, colaB) {
	if (colaA.calories > colaB.calories) {
		return 1;
	} else if (colaA.calories === colaB.calories) {
		return 0;
	} else {
		return -1;
	}
	//  Или просто return num1 - num2;
}
function compareName(colaA, colaB) {
	if (colaA.name > colaB.name) {
		return 1;
	} else if (colaA.name === colaB.name) {
		return 0;
	} else {
		return -1;
	}
	//  Или просто return num1 - num2;
}
function compareColor(colaA, colaB) {
	if (colaA.color > colaB.color) {
		return 1;
	} else if (colaA.color === colaB.color) {
		return 0;
	} else {
		return -1;
	}
	//  Или просто return num1 - num2;
}
function printProducts(products) {
	for (var i = 0; i < products.length; i++) {
		console.log("Name: " + products[i].name +
			", Calories: " + products[i].calories +
			", Color: " + products[i].color +
			", Sold: " + products[i].sold);
	}
}
//products.sort(compareSold);
//printProducts(products);
//products.sort(compareName);
//printProducts(products);
//products.sort(compareCalories);
//printProducts(products);
products.sort(compareColor);
printProducts(products);