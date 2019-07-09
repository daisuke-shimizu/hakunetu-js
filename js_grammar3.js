let num = 0
while(num < 100){
				console.log(num);
				num += 1;
}


const question = "パンはパンでも食べられないパンは？"
const answer = "フライパン"
let input
while(input !== answer){
				input = prompt(question);
			if(input === answer){alert("that's right");
			}else{alert("that's wrong");}
				

}
