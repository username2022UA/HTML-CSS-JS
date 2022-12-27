
function caesarIn(text, key) {
	let newText = [];
	for (let i = 0; i < text.length; i++) {
		let char = text.charCodeAt(i);
		if (char >= 65 && char <= 90) {
			char = text.charCodeAt(i) + key;
			if (char > 90) {
				char = char - 26;
			}
			newText[i] = String.fromCharCode(char);
		} else if (char >= 97 && char <= 122) {
			char = text.charCodeAt(i) + key;
			if (char > 122) {
				char = char - 26;
			}
			newText[i] = String.fromCharCode(char);
		} else {
			newText[i] = text[i];
		}
	}
	newText = newText.join("");
	console.log(newText);
}

function caesarOut(text, key) {
	let newText = [];
	for (let i = 0; i < text.length; i++) {
		let char = text.charCodeAt(i);
		if (char >= 65 && char <= 90) {
			char = text.charCodeAt(i) - key;
			if (char < 65) {
				char = char + 26;
			}
			newText[i] = String.fromCharCode(char);
		} else if (char >= 97 && char <= 122) {
			char = text.charCodeAt(i) - key;
			if (char < 97) {
				char = char + 26;
			}
			newText[i] = String.fromCharCode(char);
		} else {
			newText[i] = text[i];
		}
	}
	newText = newText.join("");
	console.log(newText);
}
//let textOut = "Mjqqt! N fr kwtr Frjwnhf.";
//caesar(text, 5);
//caesarOut(textOut, 5)
const buttonIn = document.querySelector('#in');
const buttonOut = document.querySelector('#out');

document.getElementById('in').onclick = function() {
	const text = document.getElementsByClassName('text-input').textContent;
	alert(text);
}
/*document.addEventListener('click', function (event) {
	if (event.target.closest('#in')) {
		caesarIn(text, 5);
	} else if ('#out') {
		caesarOut(text, 5)
	}
});
*/
