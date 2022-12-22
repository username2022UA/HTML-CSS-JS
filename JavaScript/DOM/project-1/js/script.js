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

//=============== Домашка ==============//

// Задача №1.
//Получаем элемент
const atributeName = document.querySelector('[data-say-hi]');
const atributeName2 = document.querySelectorAll('[data-say-hi]');
console.log(atributeName);
console.log(atributeName2);

//Получаем значение атрибута.
const atributeValue = atributeName.getAttribute("data-say-hi");
console.log(atributeValue);

//Проверяем наличие атрибута.
atributeName.hasAttribute("data-say-hi");
console.log(atributeName.hasAttribute("data-say-hi"))
//Устанавливаем значение атрибута.
atributeName.setAttribute("data-say-hi", 'No');

//Удаляем атрибут.
//atributeName.removeAttribute("data-say-hi");

// Задача №2.
const elems = document.querySelectorAll('li');
console.log(elems);
console.log(elems[1]);
const elems2 = document.querySelector('li');
console.log(elems2);
const elems3 = document.getElementsByTagName('li');
console.log(elems3);
console.log(elems3[1]);

// Задача №3.
const elementLike = document.getElementsByClassName("like");
console.log(elementLike);

const elementLike2 = document.querySelectorAll(".like");
console.log(elementLike2);

const elementLike3 = document.querySelector(".like");
console.log(elementLike3);
console.log(elementLike3.innerHTML);


// Задача №4.
// Куда добавится <li>Текст</li> ?
const list = document.querySelector('ul');
console.log(list);
list.insertAdjacentHTML('beforebegin', '<li>Hi</li>');
list.insertAdjacentHTML('beforeend', '<li>Hi</li>');
const list2 = document.querySelector('ul');
console.log(list2);