let student = prompt("Digite seu nome.")
let n1 = prompt("Digite a nota da primeira prova.")
let n2 = prompt("Digite a nota da segunda prova.")

let average = (Number(n1) + Number(n2)) / 2

let result = average > 7

average = average.toFixed(2);

if (result) {
    alert("Parabéns, " + student + "! Sua média foi de: " + average);
} else {
    alert(student + ", estude para sua prova de recuperação! Sua média foi de: " + average);
}