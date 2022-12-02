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

//===============================================

// indexOf
console.log(arr.indexOf("Иштван"));
console.log(arr.indexOf("Вася"));
console.log(arr.indexOf("Иштван", 2));

// includes
console.log(arr.includes("Иштван"));
console.log(arr.includes("Вася"));
console.log(arr.includes("Иштван", 2));