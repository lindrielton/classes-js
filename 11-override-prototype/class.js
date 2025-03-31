

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

Produto.prototype.peso = "1000kg";
Produto.prototype.quantia = '10 fardos'
Produto.prototype.nome = "arroz"


let novoProduto = new Produto('café', '500g', new Date(), 14.90 );


console.log(novoProduto.nome);
console.log(novoProduto.peso);
console.log(novoProduto.dta);
console.log(novoProduto.valor);
novoProduto.data();

console.log(Produto.prototype.peso);// com o prototype podemos influenciar na clase pai ou no prototype da classe nova.
console.log(Produto.prototype.quantia);// adicionando um produto
console.log(Produto.prototype.nome);



  
