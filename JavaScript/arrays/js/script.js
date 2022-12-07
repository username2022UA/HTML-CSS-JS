
let use = ["Ваня", "Иштван", "Оля"];
console.log(use);
let useCopy = use;
useCopy.length = 3;
console.log(useCopy);
console.log(use);

// Удаление елемента начиная с первой поззиции
let arrOne = ["Ваня", "Иштван", "Оля"];
arrOne.splice(1, 1);
console.log(arrOne);

//===============================================

// Удаление элемента и возврат его в переменную
let arrTwo = ["Ваня", "Иштван", "Оля"];
let removed = arrTwo.splice(1, 1);
console.log(removed);

//===============================================

// Замена элемента начиная с нулевой позиции
let arrThree = ["Ваня", "Иштван", "Оля"];
arrThree.splice(0, 1, "Коля");
console.log(arrThree);

//===============================================

// Добавление элемента начиная с первой позицмм
let arrFour = ["Ваня", "Иштван", "Оля"];
arrFour.splice(1, 0, "Nick", "Anna");
console.log(arrFour);

//===============================================

// Удаление элемента начиная с последней позиции
let arrFive = ["Ваня", "Иштван", "Оля"];
arrFive.splice(-1, 1);
console.log(arrFive);

//===============================================

// Копируем часть массива
let arr = ["Ваня", "Иштван", "Оля"];
let arrCop = arr.slice(1, 2);
console.log(arrCop);

let arrCop2 = arr.slice(-2, -1);
console.log(arrCop2);

//===============================================

// Копируем массив
let arrCop3 = arr.slice();
console.log(arrCop3);

//===============================================

// Коппируем массив и добавляем элементв конец массива
let arrCop4 = arr.concat("Nick");
console.log(arrCop4);

// ============ Поиск в массивах ================= //

// indexOf
console.log(arr.indexOf("Иштван"));
console.log(arr.indexOf("Вася"));
console.log(arr.indexOf("Иштван", 2));

// includes
console.log(arr.includes("Иштван"));
console.log(arr.includes("Вася"));
console.log(arr.includes("Иштван", 2));

// find 
let ageUser = [
	{ name: "Nick", age: 36 },
	{ name: "Anna", age: 18 },
	{ name: "Bob", age: 40 },
	{ name: "Rob", age: 36 }
];
let resultOne = ageUser.find(function (item, index, array) {
	return item.age === 18;
});
console.log(resultOne);

let resultTwo = ageUser.find(item => item.age === 40);
console.log(resultTwo);

// findeIndex
let resultIndex = ageUser.findIndex(function (item, index, array) {
	return item.age === 18;
});
console.log(resultIndex);

let resultIndex2 = ageUser.findIndex(item => item.age === 40);
console.log(resultIndex2);

// filter
let resultFilter = ageUser.filter(function (item, index, array) {
	return item.age === 36;
});
console.log(resultFilter);

// ============ Сортировка массивов ================= //

// Sort
let arrSort = ["Ваня", "Иштван", "Оля", "Анна", "Галина"];
console.log(arrSort.sort());

// Функция сортировка
let arrSort2 = [8, 5, 1, 6, 2, 4];
function sortNambers(a, b) {
	console.log("Сравниваем ${a} и ${b}");
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;
	// или return a - b;
}
console.log(arrSort2.sort(sortNambers));

console.log(arrSort2.sort((a, b) => a - b));

// ============ Сортировка массивов ================= //

// map
let resultSort = arrSort.map(function (item, index, array) {
	return item[0];
});
console.log(resultSort);

// split
let str = "Ваня,Иштван,Анна,Галина";
let arrStr = str.split(",");
console.log(arrStr);

let arrStr2 = str.split(",", 2);
console.log(arrStr2);

// join
let arrS = ["Ваня", "Иштван", "Анна", "Галина"];
let arrS2 = arrS.join(", ");
console.log(arrS2);

// ============ Перебор массива ================= //

// цикл for
let arrName = ["Ваня", "Иштван", "Оля"];
for (let i = 0; i < arrName.length; i++) {
	console.log(arrName[i]);
}

// цикл for of
for (let arrItem of arrName) {
	console.log(arrItem);
}

// метод перебора forEach
arrName.forEach(function (item, index, array) {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});

arrName.forEach((item, index, array) => {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});

arrName.forEach(show);
function show(item) {
	console.log(item);
}

// метод перебора reduce/reduceRight
let arrNamber = [1, 2, 3, 4];
let reduceNamber = arrNamber.reduce(function (previousValue, item, index, array) {
	return item + previousValue;
}, 0);
console.log(reduceNamber);

// ============ Домашка ================= //

// Задача №1.
let arrLong = ["Ваня", "Иштван", "Оля"];
let newArrLong = arrLong;
newArrLong.push("Nick");
console.log(arrLong.length);

// Задача №2.
let users = ["Ваня", "Иштван"];
users.push("Оля");
console.log(users);
if (users.includes("Иштван", 0)) {
	let userIndex = users.indexOf("Иштван", 0);
	users[userIndex] = "Петя";
}
console.log(users);
let deleteUsers = users.shift();
console.log(users);
console.log(deleteUsers);
users.unshift("Маша", "Паша");
console.log(users);

// Задача №3.

let usersOne = ["Ваня", "Иштван", "Оля"];
console.log(usersOne);
let userDelete;
if (usersOne.includes("Иштван", 0)) {
	userIndDel = usersOne.indexOf("Иштван", 0);
	userDelete = usersOne.splice(userIndDel, 1);
}


let userDelete1;
for (let i = 0; i < usersOne.length; i++) {
	if (usersOne[i] == "Иштван") {
		userDelete1 = usersOne.splice(i, 1);
	}
}
console.log(usersOne);
console.log(userDelete);

// Задача №4.
let strin = "Ваня,Иштван,Оля";
console.log(strin);
let strinArr;
if (Array.isArray(strin) != true) {
	strinArr = strin.split(",");
}
console.log(strinArr);

// Задача №5.
let arrPrev = [9, 2, 8];
let reduceValue3 = arrPrev.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});

//============================================

let arrNambers = [2, 3, 7, 8, 9, 17, 22, 25, 29];

function arrNamberSumm(arr, namber) { // O(n²)
	if (arr && namber) {
	for (let i = 0; i < arr.length; i++) {
		for (let n = 0 + i; n < arr.length; n++) {
			if ((arr[i] + arr[n] == namber) && (i != n)) {
				let arrTwoNamber = new Array(arr[i], arr[n]);
				console.log(arrTwoNamber);
				return;
			}
		}
	}
	} else {
		console.log("Недостаточно аргументов!");
	}
}
arrNamberSumm(arrNambers, 47);

//==============================================================

function arrNamberSumm2(arr, namber) { // O(n²)?
	if (arr && namber) {
		let x;
		for (let i = 0; i < arr.length; i++) {
			x = namber - arr[i];
			if (arr.includes(x, i + 1)) {
				let y = arr[arr.indexOf(x, i + 1)];
				let arrTwoNamber = new Array(arr[i], y);
				console.log(arrTwoNamber);
				return;
			}
		}
	} else {
		console.log("Недостаточно аргументов!");
	}
}
arrNamberSumm2(arrNambers, 26);

//==============================================================

function arrNamberSumm3(arr, namber) { // O(n)
	if (arr && namber) {
		let x;
		let box = [];
		for (let i = 0; i < arr.length; i++) {
			x = namber - arr[i];
			if (box.includes(x, 0)) {
				let arrTwoNamber = new Array(x, arr[i]);
				console.log(arrTwoNamber);
				return;
			} else {
				box.push(arr[i]);
			}
		}
	} else {
		console.log("Недостаточно аргументов!");
	}
}
arrNamberSumm3(arrNambers, 31)

//==============================================================

// Бинарный поиск  O(n log n)
let arrNambers2 = [2, 3, 7, 8, 9, 17, 22, 25, 29];
function arrNamberSumm4(arr, namber) {
	if (arr && namber) {
		for (let i = 0; i < arr.length; i++) {
			let x = namber - arr[i];
			let arrNew = arr.slice(i + 1);
			while (arrNew.length >= 1) {
				let center = Math.floor(arrNew.length / 2);
				if (x == arrNew[center]) {
					let arrTwoNamber = new Array(arr[i], arrNew[center]);
					console.log("Пара чисел: " + arrTwoNamber);
					return;
				} else if (x < arrNew[center]) {
					arrNew = arrNew.slice(0, center);
				} else if (x > arr[center]) {
					arrNew = arrNew.slice(center + 1);
				}
			}
		}
	} else {
		console.log("Недостаточно аргументов!");
	}
	console.log("Нет такой пары чисел!");
}
arrNamberSumm4(arrNambers2, 11);

//==============================================================
/*
let arrNambers3 = [2, 3, 7, 8, 9, 17, 22, 25, 29];
function arrNamberSumm5(arr, namber) { // O(n)
	if (arr && namber) {
		while (arr.length > 1) {
			let borderL = arr[0];
			let borderR = arr[arr.length - 1];
			if (borderL + borderR == namber) {
				let arrTwoNamber = new Array(borderL, borderR);
				console.log("Два числа: " + arrTwoNamber);
				return;
			} else if (borderL + borderR < namber) {
				arr = arr.slice(1);
			} else if (borderL + borderR > namber) {
				arr = arr.slice(0, arr.length - 1);
			}
		}
		console.log("Нет такой пары чисел!");
	} else {
		console.log("Недостаточно аргументов!");
	}
}
arrNamberSumm5(arrNambers3, 30);
*/
//================================================

let arrNambers4 = [2, 3, 7, 8, 9, 17, 22, 25, 29];
function arrNamberSumm6(arr, namber) { // O(n)
	if (arr && namber) {
		let l = 0;
		let r = arr.length - 1;
		while (l < r) {
			let sum = arr[l] + arr[r];
			if (sum == namber) {
				let arrTwoNamber = new Array(arr[l], arr[r]);
				console.log("Два числа: " + arrTwoNamber);
				return;
			} else if (sum < namber) {
				l++;
			} else if (sum > namber) {
				r--;
			}
		}
		console.log("Нет такой пары чисел!");
	} else {
		console.log("Недостаточно аргументов!");
	}
}
arrNamberSumm6(arrNambers4, 26);