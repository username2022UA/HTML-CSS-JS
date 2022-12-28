// Получение всех фонм на странице
// статичная коллекция
const forms = document.querySelectorAll('form');
console.log(forms);
// живая коллекция
const forms1 = document.forms;
console.log(forms1);

// Получение конкретной формы
//const mainForm = document.forms[0];
// или 
const mainForm = document.forms.main;
console.log(mainForm);

// Получение списка всех элементов конкретной формы
const mainFormElements = mainForm.elements;
console.log(mainFormElements);

//============================ input|textarea =============================//

// Получение конкретного элемента формы с именем nameInput
//const mainFormInput = mainForm.elements.nameInput;
// или
const mainFormInput = mainForm.nameInput;
console.log(mainFormInput);

//Получение формы элемента (родителя)
console.log(mainFormInput.form);

// Получение конкретного элемента формы с именем nameTextarea
const mainFormTextarea = mainForm.nameTextarea;
console.log(mainFormTextarea);

// Получение значений (содержимое поля) mainFormInput и mainFormTextarea
console.log(mainFormInput.value);
console.log(mainFormTextarea.value);

// Присвоение значений (содержимого поля)
//mainFormInput.value = "Bye!"
mainFormTextarea.value = "Bye Bye!"

//============================ radio/file =============================//

// Получение коллекцию с именем nameRadio
const mainFormRadioButtons = mainForm.nameRadio;
console.log(mainFormRadioButtons);

// Получение коллекцию с именем nameCheck
const mainFormRadioCheckBox = mainForm.nameCheck;
console.log(mainFormRadioCheckBox);

// Получение значения поля type radio
console.log(mainFormRadioButtons[0].value);
console.log(mainFormRadioButtons[1].value);
console.log(mainFormRadioButtons[0].checked);
console.log(mainFormRadioButtons[1].checked);

// Получение значения поля type checkBox
console.log(mainFormRadioCheckBox.value);
console.log(mainFormRadioCheckBox.checked);

// Получение значения поля type file
const mainFormFile = mainForm.nameFile;
console.log(mainFormFile.value);

// Присвоение значений поля radio
mainFormRadioButtons[0].value = "left";
mainFormRadioButtons[1].value = "right";
mainFormRadioButtons[1].checked = true;

// Присвоение значений поля checkBox
mainFormRadioCheckBox.value = "save";
mainFormRadioCheckBox.checked = true;

// Присвоение значений поля file (Нельзя задать значениеб но можно очистить поле)
mainFormFile.value = "";

//============================ select/option =============================//

// Получение конкретного элемента формы с именем nameSelect
const mainFormSelect = mainForm.nameSelect;

// Получение всех options
console.log(mainFormSelect.options);

// Получение индекса выбранного options
const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex);

// Получение значения выбранного options
const mainFormSelectValue = mainFormSelect.value;
console.log(mainFormSelectValue);

// Получение текста выбранного options
const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log(mainFormSelectText);

// Присвоение значений select/option
mainFormSelect.options[1].selected = true;
mainFormSelect.selectedIndex = 2;
mainFormSelect.value = 3;

// Добавление options
let newOption = new Option("100", "4", true, true);
mainFormSelect.append(newOption);

//========================== События focus и blur ==========================//

const mainFormInputPlaceholder = mainFormInput.placeholder;
mainFormInput.addEventListener("focus", function (e) {
	mainFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function (e) {
	mainFormInput.placeholder = mainFormInputPlaceholder;
});

//========================== методы elem.focus() и elem.blur() ==========================//
mainFormInput.focus();
setTimeout(() => {
	mainFormInput.blur();
}, 3000);