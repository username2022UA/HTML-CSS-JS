let text = "zyYvV";
function caesar(text, key) {
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
caesar(text, 5);
