
class Endereco{
    constructor(endereco){
        this.endereco = endereco;
    }

    atualizaEndereco(novoEndereco){
            for( let informacao in this.endereco){
                if(this.endereco[informacao].rua != novoEndereco.rua){
                         this.endereco[informacao].rua   =  novoEndereco.rua;

                }if(this.endereco[informacao].bairro != novoEndereco.bairro){
                         this.endereco[informacao].bairro = novoEndereco.bairro;

                }if(this.endereco[informacao].cidade != novoEndereco.cidade){
                    this.endereco[informacao].cidade = novoEndereco.cidade;

                }if(this.endereco[informacao].estado != novoEndereco.estado){
                     this.endereco[informacao].estado = novoEndereco.estado;
                }
    }
}

}






let novolocal = new Endereco([
    {
    rua:"maria de oliveira", 

    bairro:"centro",

     cidade:'são francisco', 

     estado:"paraiba"}
    ]);

console.log(novolocal);

novolocal.atualizaEndereco({rua:"epitasio pessoa", bairro:"raquel gadelha", cidade:"sousa", estado:"paraiba"})


console.log(novolocal);




  
