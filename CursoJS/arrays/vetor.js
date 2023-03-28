let num = ["carro", "bicicleta", "semafro"];

console.log(num);
console.log(`O vetor tem ${num.length} posiçõs`);

console.log(`O primeiro valor do vetor é ${num[0]}`);

let tamanho = num.length;

let i = 0;
for (num[0]; i < tamanho; i++) {
  console.log(`${num[i]}`);
}



// da pra fazer assim


for (let pos in num){
    console.log(num[pos])
}