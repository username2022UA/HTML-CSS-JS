//WINDOW
const windowWidts = window.innerWidth;
console.log(`Ширина окна браузера: ${windowWidts}px`);

//Navigator
console.log(navigator.userAgent);

//Platforme
console.log(navigator.platform);

//URL
console.log(location.href);

//History
history.back();
history.forward();

const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
console.log(headElement);
console.log(bodyElement);

//Первый и последний дочерние элементы
const firstChild = bodyElement.firstChild;
const lastChild = bodyElement.lastChild;
console.log(firstChild);
console.log(lastChild);

//Список всех детей
const childNodes = bodyElement.childNodes;
console.log(childNodes);

//Проверка на присутствие дочерних узлов
console.log(bodyElement.hasChildNodes());

//=================Поиск произвольного элемента================//
//Поиск по селектору класса
const elemsOne = document.querySelectorAll('.lesson__list');
console.log(elemsOne);

//Поиск по селектору тега
const elemsTwo = document.querySelectorAll('div');
console.log(elemsTwo);

//Поиск по смешанному селектору тега и класса
const elemsThree = document.querySelectorAll('div.lesson__text');
console.log(elemsThree);

//Поиск по первому уровню вложенности
const elemsFour = document.querySelectorAll('.lesson__text>li');
console.log(elemsFour);

//Поиск по нескольким классам
const elemsFive = document.querySelectorAll('.yello, .lesson__text');
console.log(elemsFive);

//Поиск по вложенным классам
const elemsSix = document.querySelectorAll('.lesson .lesson__text');
console.log(elemsSix);

//Поиск по ID
const elemsSeven = document.querySelectorAll('#lesson');
console.log(elemsSeven);

//Поиск по атрибуту
const elemsEight = document.querySelectorAll('[data-item]');
console.log(elemsEight);

//Поиск по атрибуту со значением
const elemsNine = document.querySelectorAll('[data-item="85"]');
console.log(elemsNine);

//Получение конкретного элемента коллекции
const elemets = document.querySelectorAll("li");
console.log(elemets[2]);

//Перебор коллекции
for (const item of elemets) {
	console.log(item);
}

elemets.forEach(item => {
	console.log(item);
});