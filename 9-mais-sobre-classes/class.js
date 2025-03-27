

class Pedras {
      constructor(peso,nome,cor){
          this.peso = peso;
          this.nome = nome;
          this.cor = cor;
      }

      checar(valor){
        return valor = valor*this.peso;
       }

}

Pedras.prototype.altura = 3;

let Novobijeto = new Pedras(1000, 'pedra de marmore', 'cinza');




console.log(Novobijeto.peso);
console.log(Novobijeto.nome);
console.log(Novobijeto.cor);
console.log(Novobijeto.checar(10));

console.log(Novobijeto.altura);











  
