let firstPart = "likes";
let userInfo = {
	name: "Rob",
	age: 30,
	"likes javascript": true,
	[firstPart]: true,
	0: "Anna",
};
console.log(userInfo.name);
console.log(userInfo["likes javascript"]);
console.log(userInfo[firstPart]);

// Преимущество квадратных скобок
let key = "name";
console.log(userInfo[key]);
console.log(userInfo[0]);
console.log(userInfo["0"]);

// Вложенность
let userInfo2 = {
	name: "Rob",
	age: 30,
	addres: {
		city: "Uzhhorod",
		street: "Freedom",
	}
};
console.log(userInfo2);
console.log(userInfo2.addres);
console.log(userInfo2.addres.city);

// Получение значения свойств обьектов
function makeUserInfo(name, age) {
	return {
		name: age,
		age: age,
	};
}
let user = makeUserInfo("Вася", 30);
console.log(user);

// Добавление новых свойств
let userInfo3 = {
	name: "Bob",
	age: 30,
}
console.log(userInfo3);
userInfo3.age = 25;
console.log(userInfo3);
userInfo3["likes javascript"] = true;
console.log(userInfo3);
userInfo3.addres = {
	city: "Uzhhorod",
	street: "Freedom",
};
console.log(userInfo3);

// Удаление свойства из обьекта
delete userInfo3.age;
console.log(userInfo3);

// Изменение свойства обьекта

userInfo3.age = 15;
console.log(userInfo3);

// Копирование обьекта
let userInfo4 = userInfo3;
userInfo3.age = 20;
console.log(userInfo3);

// Дублирование обьектов
let userCopy = Object.assign({}, userInfo4);
userCopy.age = 18;
console.log(userCopy);

// Опциональная цепочка
let userCopy5 = {
	name: "Anna",
	color: undefined,
	//age: 22,
	addres: {
		ccity: "Uzhhorod",
		//street: "Freedom",
	}
}
console.log(userCopy);
console.log(userCopy5.age);
console.log(userCopy5.addres.street);
console.log(userCopy5?.addres?.street)

// Проверка на существование свойства в обьекте
if ("name" in userCopy5) {
	console.log(userCopy5.name);
}
// или
if (userCopy5.name) {
	console.log(userCopy5.name);
}
if (userCopy5.color) { // не находит свойство со значением undefined (код не выполняется)
	console.log(userCopy5.color);
}
if ("color" in userCopy5) { // находит свойство со значением undefined (код выполняется)
	console.log(userCopy5.color);
}

// цикл <<for...in>>
let userFor = {
	name: "Anna",
	color: "red",
	age: 22,
	addres: {
		ccity: "New York",
		street: "Freedom",
	}
}
for (let name in userFor) {
	console.log(name);
	console.log(userFor[name]);
}
for (let name in userFor.addres) {
	console.log(name);
	console.log(userFor.addres[name]);
}