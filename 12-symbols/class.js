

class Produto {
    constructor(nome,peso,dta,valor){
      this.nome = nome;
      this.peso = peso;
      this.dta = dta;
      this.valor = valor;
    }

    data(){
      console.log(`produto na validade  atua ` + new Date());
    }


}

let validade = Symbol();

let codigoProduto = Symbol();

Produto.prototype[validade] = new Date();

Produto.prototype[codigoProduto] = 15006;




let novoProduto = new Produto('café', '500g', new Date(), 14.90 );


console.log(novoProduto.nome);
console.log(novoProduto.peso);
console.log(novoProduto.dta);
console.log(novoProduto.valor);
novoProduto.data();

console.log(Produto.prototype[validade]);
console.log(Produto.prototype[codigoProduto]);






  
