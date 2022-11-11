/*
function showHello() {
	console.log("Hello!");
}
showHello();
*/

//вложенность и видимость функций
/*
function getSumm() {
	let numOne, numTwo;
	function getNumOne() {
		numOne = 1;
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();
	let numSumm = numOne + numTwo;
	console.log(numSumm);
}
getSumm();
*/

//локальные и внешние переменные
/*
function showMessage() {
	//локальная переменная
	let message = "Hello!"
	console.log(message);
}
console.log(message);
*/

//внешняя переменная
/*
let message;
function showMessage() {
	//используется внешняя переменная
	message = "Hello!"
}
showMessage();
console.log(message);
*/

//глобальные переменные
/*
let globalWar = "im global"
function getSumm() {
	let numOne, numTwo;
	function getNumOne() {
		numOne = 1;
		console.log(globalWar);
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();
	let numSumm = numOne = numTwo;
	console.log(globalWar);
}
console.log(globalWar);
getSumm();
*/

//параметры (аргументы)
/*
function calcSumm(numOne, numTwo) {
	console.log(`переменная nunOne: ${numOne}`);
	console.log(`переменная nunTwo: ${numTwo}`);
	let numSumm = numOne + numTwo;
	console.log(`Сумма: ${numSumm}`);
}
calcSumm(1, 2);
*/

//функции-колбеки
/*
function calcSumm(numOne, numTwo, more, less) {
	let numSumm = numOne + numTwo;
	if (numSumm > 3) {
		more();
	}
	else {
		less();
	}
}
function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm(1, 1, showMoreMessage, showLessMessage);
*/

//возврат результата
/*
function calcSumm(numOne, numTwo) {
	let numSumm = numOne + numTwo;
	return numSumm;
}
let funcRezult = calcSumm(1, 2);
console.log(`Сумма: ${funcRezult}`);
*/

/*
function calcSumm(numOne, numTwo) {
	let rezult = 1;
	for (let i = 0; i < numTwo; i++) {
		rezult *= numOne;
	}
	return rezult;
}
console.log(calcSumm(2, 3));
*/

//Рекурсия
/*
function calcSumm(numOne, numTwo) {
	if (numTwo === 1) {
		return numOne;
	}
	else {
		return numOne * calcSumm(numOne, numTwo -1);
	}
}
console.log(calcSumm(2, 3));
*/

//Функциональное выражение
/*
let showMessage = function() {
	console.log("Hello!");
};
showMessage();
*/

/*
let getSumm;
if (2 > 1) {
	getSumm = function() {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();
*/

//Однострочная стрелочная функция
/*
let getMessage = (text, name) => text + ", " + name + "!";
console.log(getMessage("Hello", 'Rob'));
*/

//Многострочная стрелочная функция
/*
let getMessage = (text, name) => {
	let message = text + ", " + name + "!";
	return message;
};
console.log(getMessage("Hello", "Rob"));
*/

//планирование вызова функции
/*
function showMessage(text, name) {
	console.log(`${text}, ${name}!`);
}
setTimeout(showMessage, 2000, "Hello", "Rob");
*/

/*
function showMessage(text, name) {
	console.log(`${text}, ${name}!`);
}
setInterval(showMessage, 2000, "Hello", "Rob");
*/

//clearTimeout
/*
function showNumber(num) {
	console.log(num);
	let timeId = setTimeout(showNumber, 1000, ++num);
	if (num === 6) {
		clearTimeout(timeId);
	}
}
setTimeout(showNumber, 1000, 1);
*/

/*
let result = 0;
function showNumber(num) {
	result += num;
	console.log(result);
	if (result === 5) {
		clearInterval(timeId);
	}
}
let timeId = setInterval(showNumber, 1000, 1);
*/
/*
function showName() {
	console.log("Rob!");
}
setTimeout(showName, 0);
console.log("Anna!");
*/

/*
'use strict'
let showMessage;
if (2 > 1) {
	showMessage = function() {
		console.log("Hello");
	}
}
showMessage();
*/


