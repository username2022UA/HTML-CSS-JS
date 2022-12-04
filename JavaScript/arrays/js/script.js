
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
function sortNambers (a, b) {
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
let resultSort = arrSort.map(function(item, index, array) {
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

arrName.forEach((item, index, array)  => {
	console.log(`${item} находится на ${index} позиции в ${array}`);
});

arrName.forEach(show);
function show(item) {
	console.log(item);
}

// метод перебора reduce/reduceRight
let arrNamber = [1, 2, 3, 4];
let reduceNamber = arrNamber.reduce(function(previousValue, item, index, array) {
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
let reduceValue3 = arrPrev.reduce(function(previousValue, item, index, array) {
	console.log(previousValue);
});

//============================================

let arrNambers = [-1, 2, 3, 7, 10];

function arrNamberSumm(arr, namber) {
	for (let i = 0; i < arr.length; i++) {
		for (let n = 0 + i; n < arr.length; n++) {
			if ((arr[i] + arr[n] == namber) && (i != n)) {
				let arrSumm = new Array(arr[i], arr[n]);
				console.log(arrSumm);
				return;
			}
		}
	}
}
arrNamberSumm(arrNambers, 9);

function arrNamberSumm2(arr, namber) {
	for (let i = 0; i < arr.length; i++) {
		let x = namber - arr[i];
		if (arr.includes(x, i + 1)) {
			let arrSumm = new Array(arr[i], arr[arr.indexOf(x, i + 1)]);
			console.log(arrSumm);
			return;
		}
	}
}
arrNamberSumm2(arrNambers, 9);