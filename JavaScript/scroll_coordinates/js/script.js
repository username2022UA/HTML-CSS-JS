// Задача № 1
// Ширина окна браузера без полосы прокрутки
const element = document.documentElement;
const elementWidth = element.clientWidth;
const allWidthElement = window.innerWidth;
console.log(elementWidth);
console.log(allWidthElement);
const whidhScroll = allWidthElement - elementWidth;
console.log(whidhScroll);


// Задача № 2
// Прокрутка страницы с задержкой
function scroll() {
	window.scrollBy({
	top: 100,
	behavior: "smooth",
});
}
setTimeout(scroll, 2000);


// Задача № 3
//Получение координатов элементов
// 1
const element2 = document.querySelector(".lesson__title");
console.log(element2);
const element2Cooorinate = element2.getBoundingClientRect()
console.log(element2Cooorinate);
// 2
const element3 = document.querySelector("h3");
console.log(element3);
const element3Cooorinate = element3.getBoundingClientRect()
console.log(element2Cooorinate);
// 3
const element4 = document.querySelector("p");
console.log(element4);
const element4Cooorinate = element4.getBoundingClientRect()
console.log(element2Cooorinate);