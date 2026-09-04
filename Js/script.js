// 1. Definição do número secreto e variáveis de controle
const numeroSecreto = 7; 
let palpite = 0;
let tentativas = 0;

// 2. Loop do jogo
while (palpite !== numeroSecreto) {
  // O Mimo costuma simular a entrada do usuário ou pedir para você definir a variável
  palpite = Number(prompt("Tente adivinhar o número de 1 a 10:"));
  tentativas++;

  // 3. Condicionais de feedback
  if (palpite === numeroSecreto) {
    console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
  } else if (palpite > numeroSecreto) {
    console.log("Muito alto! Tente novamente.");
  } else {
    console.log("Muito baixo! Tente novamente.");
  }
}

