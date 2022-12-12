let text = "hello";
function caesar(text, key) {
	let newText = [];
	for (let i = 0; i < text.length; i++) {
		newText[i] = text[i];
		let newL = text.charCodeAt(i) + key;
		newText[i] = String.fromCharCode(newL)
	}
	newText = newText.join("");
	console.log(newText);
	//console.log(typeof newText);
	//console.log(text.length);
}
//console.log(String.fromCharCode(65));

caesar(text, 5);
