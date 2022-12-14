let arrNambers = [2, 3, 7, 8, 9, 17, 22, 25, 29];

function arrNamberSumm(arr, namber) { // O(n²)
	if (arr && namber) {
		for (let i = 0; i < arr.length; i++) {
			for (let n = 0 + i; n < arr.length; n++) {
				if ((arr[i] + arr[n] == namber) && (i != n)) {
					let arrTwoNamber = new Array(arr[i], arr[n]);
					console.log(arrTwoNamber);
					return;
				}
			}
		}
	} else {
		console.log("Недостаточно аргументов!");
	}
}
arrNamberSumm(arrNambers, 47);

//==============================================================

function arrNamberSumm2(arr, namber) { // O(n²)?
	if (arr && namber) {
		let x;
		for (let i = 0; i < arr.length; i++) {
			x = namber - arr[i];
			if (arr.includes(x, i + 1)) {
				let y = arr[arr.indexOf(x, i + 1)];
				let arrTwoNamber = new Array(arr[i], y);
				console.log(arrTwoNamber);
				return;
			}
		}
	} else {
		console.log("Недостаточно аргументов!");
	}
}
arrNamberSumm2(arrNambers, 26);

//==============================================================

function arrNamberSumm3(arr, namber) { // O(n)
	if (arr && namber) {
		let x;
		let box = [];
		for (let i = 0; i < arr.length; i++) {
			x = namber - arr[i];
			if (box.includes(x, 0)) {
				let arrTwoNamber = new Array(x, arr[i]);
				console.log(arrTwoNamber);
				return;
			} else {
				box.push(arr[i]);
			}
		}
	} else {
		console.log("Недостаточно аргументов!");
	}
}
arrNamberSumm3(arrNambers, 31)

//==============================================================

// Бинарный поиск  O(n log n)
let arrNambers2 = [2, 3, 7, 8, 9, 17, 22, 25, 29];
function arrNamberSumm4(arr, namber) {
	if (arr && namber) {
		for (let i = 0; i < arr.length; i++) {
			let x = namber - arr[i];
			let arrNew = arr.slice(i + 1);
			while (arrNew.length >= 1) {
				let center = Math.floor(arrNew.length / 2);
				if (x == arrNew[center]) {
					let arrTwoNamber = new Array(arr[i], arrNew[center]);
					console.log("Пара чисел: " + arrTwoNamber);
					return;
				} else if (x < arrNew[center]) {
					arrNew = arrNew.slice(0, center);
				} else if (x > arr[center]) {
					arrNew = arrNew.slice(center + 1);
				}
			}
		}
	} else {
		console.log("Недостаточно аргументов!");
	}
	console.log("Нет такой пары чисел!");
}
arrNamberSumm4(arrNambers2, 11);

//==============================================================
/*
let arrNambers3 = [2, 3, 7, 8, 9, 17, 22, 25, 29];
function arrNamberSumm5(arr, namber) { // O(n)
	if (arr && namber) {
		while (arr.length > 1) {
			let borderL = arr[0];
			let borderR = arr[arr.length - 1];
			if (borderL + borderR == namber) {
				let arrTwoNamber = new Array(borderL, borderR);
				console.log("Два числа: " + arrTwoNamber);
				return;
			} else if (borderL + borderR < namber) {
				arr = arr.slice(1);
			} else if (borderL + borderR > namber) {
				arr = arr.slice(0, arr.length - 1);
			}
		}
		console.log("Нет такой пары чисел!");
	} else {
		console.log("Недостаточно аргументов!");
	}
}
arrNamberSumm5(arrNambers3, 30);
*/
//================================================

let arrNambers4 = [2, 3, 7, 8, 9, 17, 22, 25, 29];
function arrNamberSumm6(arr, namber) { // O(n)
	if (arr && namber) {
		let l = 0;
		let r = arr.length - 1;
		while (l < r) {
			let sum = arr[l] + arr[r];
			if (sum == namber) {
				let arrTwoNamber = new Array(arr[l], arr[r]);
				console.log("Два числа: " + arrTwoNamber);
				return;
			} else if (sum < namber) {
				l++;
			} else if (sum > namber) {
				r--;
			}
		}
		console.log("Нет такой пары чисел!");
	} else {
		console.log("Недостаточно аргументов!");
	}
}
arrNamberSumm6(arrNambers4, 26);