

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

    get verValor(){
          return " seu valor é " + this.valor;
    }

    set alterarValor(valor){
              return this.valor = valor;;
    }


}








let novoProduto = new Produto('café', '500g', new Date(), 14.90 );


console.log(novoProduto.nome);
console.log(novoProduto.peso);
console.log(novoProduto.dta);
console.log(novoProduto.valor);
novoProduto.data();




novoProduto.alterarValor = 30;



console.log(novoProduto.verValor);












  
