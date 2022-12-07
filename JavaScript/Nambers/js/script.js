//========= Домашка ========//

// Задача №1.
let numOne = 1.005;
//numOne = Math.ceil(1.005 * 100) / 100;
numOne = Math.round((numOne + Number.EPSILON) * 100) / 100;
console.log(numOne);

// Задача №2.
let value = "135.58px";
value = parseFloat("135.58px")
console.log(value);
console.log(typeof value);

// Задача №3.
let value2 = 58 + "Hello!";
if (isNaN(value2)) {
	console.log("Результат выражения NaN");
}

// Задача №4.
console.log(Math.max(10, 58, 39, -150, 0));

// Задача №5.
let number58 = 58.858;
//number58 = Math.floor(number58);
number58 = Math.trunc(number58);
console.log(number58);