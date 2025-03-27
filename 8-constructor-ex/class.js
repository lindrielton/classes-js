

class obijeto {
      constructor(peso,nome,cor){
          this.peso = peso;
          this.nome = nome;
          this.cor = cor;
          this.checar = function(valor){
           return valor = valor*this.peso;
          }
      }
}


let Novobijeto = new obijeto(1000, 'pedra de marmore', 'cinza');


console.log(Novobijeto.peso);
console.log(Novobijeto.nome);
console.log(Novobijeto.cor);
console.log(Novobijeto.checar(10));










  
