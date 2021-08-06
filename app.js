let usuarioPlacar = 0;
let cpuPlacar = 0;
const usuarioPlacar_span = document.getElementById("placar-usuario");
const cpuPlacar_span = document.getElementById("placar-cpu");
const placar_div = document.querySelector(".placar");
const resultado_p = document.querySelector(".resultado > p");
const pedra_div = document.getElementById("pedra");
const papel_div = document.getElementById("papel");
const tesoura_div = document.getElementById("tesoura");

function getComputerChoice(){
	const choices = ['pedra', 'papel', 'tesoura'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter){
	if (letter === "pedra") return "Pedra";
	if (letter === "papel") return "Papel";
	return "Tesoura";
}

function win(userChoice, computerChoice) {
	const smallUserWord = "Player".fontsize(3).sup();
	const smallCompWord = "CPU".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);
	usuarioPlacar++;
	usuarioPlacar_span.innerHTML = usuarioPlacar;
	cpuPlacar_span.innerHTML = cpuPlacar;
	resultado_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ganha de ${convertToWord(computerChoice)}${smallCompWord}. Você Venceu!`;
	userChoice_div.classList.add('brilho-verde');
	setTimeout(function() { userChoice_div.classList.remove('brilho-verde') }, 300);
}

function lose(userChoice, computerChoice){
	const smallUserWord = "Player".fontsize(3).sup();
	const smallCompWord = "CPU".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);
	cpuPlacar++;
	usuarioPlacar_span.innerHTML = usuarioPlacar;
	cpuPlacar_span.innerHTML = cpuPlacar;
	resultado_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} é Inutil contra ${convertToWord(computerChoice)}${smallCompWord}. Você Perdeu...`;
	userChoice_div.classList.add('brilho-vermelho');
	setTimeout(function() { userChoice_div.classList.remove('brilho-vermelho') }, 300);
}

function draw(userChoice, computerChoice){
	const smallUserWord = "Player".fontsize(3).sup();
	const smallCompWord = "CPU".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);
	resultado_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} e ${convertToWord(computerChoice)}${smallCompWord} são Same Energy. Temos um Empate :/`;
	userChoice_div.classList.add('brilho-cinza');
	setTimeout(function() { userChoice_div.classList.remove('brilho-cinza') }, 300);
}


function game(userChoice) {
	const computerChoice = getComputerChoice();	
	switch(userChoice + computerChoice){
		case "pedratesoura":
		case "papelpedra":
		case "tesourapapel":
			win(userChoice, computerChoice);
			break;
		case "pedrapapel":
		case "papeltesoura":
		case "tesourapedra":
			lose(userChoice, computerChoice);
			break;
		case "pedrapedra":
		case "papelpapel":
		case "tesouratesoura":
			draw(userChoice, computerChoice);
			break;
	}
}

function main(){

	pedra_div.addEventListener('click', function(){
		game("pedra");
	})
	papel_div.addEventListener('click', function(){
		game("papel");
	})
	tesoura_div.addEventListener('click', function(){
		game("tesoura");
	})
}

main();