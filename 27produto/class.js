/*

Implemente uma classe chamada “Produto” que possua atributos para armazenar 
o nome, o preço e a quantidade em estoque. Adicione métodos para calcular o valor 
total em estoque e verificar se o produto está disponível.
*/


class produto{
    constructor(nome, preco, quantidade){
          this.nome = nome;
          this.preco = preco;
          this.quantidade = quantidade;
    }

    valorTotal(){
        let val = this.preco*this.quantidade
        if(val > 0 ){
            console.log(`a quantidade total é ${val} `)
        }else{
            console.log('produto em falta!')
        }
        
    }

    comprar(quantia){
        this.quantidade -= quantia;
        console.log(`o valor foi alterado vc está com ${this.quantidade} produtos...`);
    }
}





let novoProduto = new produto('sabonete', 2.00, 5);
novoProduto.valorTotal();
novoProduto.comprar(2);