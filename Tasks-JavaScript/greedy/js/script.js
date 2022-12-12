function greedy(change) {
	let coin1 = 1;
	let coin5 = 5;
	let coin10 = 10;
	let coin25 = 25;
	let coinOut1 = 0;
	let coinOut5 = 0;
	let coinOut10 = 0;
	let coinOut25 = 0;
	let coinSumm = 0;
	change = Math.round(change * 100);
	let balance = change;
	while (balance > 0) {
		if (balance >= coin25) {
			balance = balance % coin25;
			coinOut25 = (change - balance) / coin25;
			change = balance;
		} else if (balance >= coin10) {
			balance = balance % coin10;
			coinOut10 = (change - balance) / coin10;
			change = balance;
		} else if (balance >= coin5) {
			balance = balance % coin5;
			coinOut5 = (change - balance) / coin5;
			change = balance;
		} else if (balance >= coin1) {
			balance = balance % coin1;
			coinOut1 = (change - balance) / coin1;
			change = balance;
		}
	}
	coinSumm = coinOut1 + coinOut5 + coinOut10 + coinOut25;
	console.log(`25 центов: ${coinOut25} монет
10 центов: ${coinOut10} монет
5 центов: ${coinOut5} монет
1 цент: ${coinOut1} монет
Всего: ${coinSumm} монет`);
}
greedy(0.55);
//console.log(String.fromCharCode(65));
