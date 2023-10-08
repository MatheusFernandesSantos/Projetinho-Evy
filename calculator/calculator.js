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
} else if (media >= 9) {
    console.log('REPROVADO');
    document.getElementById('resultado').innerHTML += 'Falta um pouquinho';
} else if (media >= 8) {
    console.log('REPROVADO');
    document.getElementById('resultado').innerHTML += 'Quase lá.';
} else if (media >= 7) {
    console.log('REPROVADO');
    document.getElementById('resultado').innerHTML += 'Pode melhorar.';
} else if (media >= 6) {
    console.log('REPROVADO');
    document.getElementById('resultado').innerHTML += '6 é média e não sou nota.';
} else if (media >= 5) {
    console.log('REPROVADO');
    document.getElementById('resultado').innerHTML += 'Só metade?.';
} else if (media >= 4) {
    console.log('REPROVADO');
    document.getElementById('resultado').innerHTML += 'Pouco para metade.';
} else if (media >= 3) {
    console.log('REPROVADO');
    document.getElementById('resultado').innerHTML += 'Tá errado';
} else if (media >= 2) {
    console.log('REPROVADO');
    document.getElementById('resultado').innerHTML += 'Está querendo mentir para quem?';
} else {
    console.log('REPROVADO');
    document.getElementById('resultado').innerHTML += 'Não é válido!';
}

console.log ('Fim do programa');

}
mediaAluno();