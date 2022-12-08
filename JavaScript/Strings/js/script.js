let textHi = "Hello!";
let textAll = `${textHi} I am a string!`;
console.log(textAll);

function someSum(a, b) {
	return a + b;
}
console.log(`Сумма: ${someSum(4, 7)}`);

let text = `Hello!
Bы на канале
Фрилансер по жизни!
`;
console.log(text);

let textTwo = "Hello!\n\tBы на канале\n\t\tФрилансер по жизни!\u00A9 \u{1F60D}";
console.log(textTwo);
console.log(textTwo[0]);
console.log(textTwo.indexOf("кан"));
console.log(textTwo.indexOf("кан", 15));

//========= Домашка ========//

// Задача №1.
let fls = "фрилансер";
let text1 = `Hello! I am a ${fls}`;
console.log(text1);

// Задача №2.
console.log(fls[5]);
console.log(fls[fls.indexOf("н")]);
for (let i = 0; i < fls.length; i++) {
	if (fls[i] == "н") {
		console.log(fls[i]);
	}
}

// Задача №3.
let text2 = 123 + "456";
console.log(text2);
console.log(typeof text2);

// Задача №4.
console.log(fls.toUpperCase());

// Задача №5.
if (fls.includes("лан")) {
	console.log("лан");
}
if (fls.indexOf("лан") > 1) {
	console.log("лан");
}