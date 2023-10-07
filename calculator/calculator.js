function notaNamoro() {
    
    // Lógica de Programação

console.log ('Início do programa');


// Declaração  das "variáveis" com "const"
const nota1 = parseInt(document.getElementById('nota1').value);


// calculo da média
const media = (nota1);

console.log ('A nota1 do aluno é:', nota1);


document.getElementById('resultado').innerHTML = 'O número escolhido é: ' + media + '<br>';

console.log ('O número escolhido é:', media);

if (media >= 10) {
    console.log('APROVADO');
    document.getElementById('resultado').innerHTML += 'TE AMO MIL MILHÕES';
} else if (media >= 8) {
    console.log('Aprovado');
    document.getElementById('resultado').innerHTML += 'Tá quase lá.';
} else if (media >= 5) {
    console.log('Aprovado');
    document.getElementById('resultado').innerHTML += 'Pode melhorar.';
} else {
    console.log('REPROVADO');
    document.getElementById('resultado').innerHTML += 'Você ama mais, pode votar de novo!';
}

console.log ('Fim do programa');

}
mediaAluno();