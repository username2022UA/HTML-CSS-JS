const buttonInput = document.querySelector("#btnInput");
const buttonOutput = document.querySelector("#btnOutput");
buttonInput.addEventListener("click", function (e) {
	let key = document.querySelector("#input").value;
	key = Number(key);
	let text = document.querySelector("#textarrea").value;
	document.querySelector("#textarrea").value = caesarIn(text, key);
});
buttonOutput.addEventListener("click", function (e) {
	let key = document.querySelector("#input").value;
	key = Number(key);
	let text = document.querySelector("#textarrea").value;
	document.querySelector("#textarrea").value = caesarOut(text, key);
});

function caesarIn(text, key) {
	let newText = [];
	for (let i = 0; i < text.length; i++) {
		let char = text.charCodeAt(i);
		if (char >= 65 && char <= 90) {
			char = char + key;
			if (char > 90) {
				char = char - 26;
			}
			newText[i] = String.fromCharCode(char);
		} else if (char >= 97 && char <= 122) {
			char = char + key;
			if (char > 122) {
				char = char - 26;
			}
			newText[i] = String.fromCharCode(char);
		} else {
			newText[i] = text[i];
		}
	}
	newText = newText.join("");
	return newText;
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
	return newText;
}