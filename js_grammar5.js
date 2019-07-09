function isOddNumber(num){
		return num % 2 === 1;
}
//あくまでもreturnは関数内から外に関数で処理したものを出してあげる記述
console.log('9を入力したらtrueが返るべき: ', isOddNumber(9) );
console.log('14を入力したらfalseが返るべき: ', isOddNumber(14) );

const factrial = function(num){
				let uni = 1;
				for(i = num; i > 0; i-- ){
								uni *= i;
				}
				return uni;
}

console.log(factrial(6));
console.log(factrial(50));
