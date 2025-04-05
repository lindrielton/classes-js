
class  Endereco {
    constructor(rua, bairro, cidade, estado){
                  this.rua = rua;
                  this.bairro = bairro;
                  this.cidade = cidade;
                  this.estado = estado;
    }


    set novaRua(novarua){
         this.rua = novarua;
    }

    set novobairro(novobairro){
        this.bairro = novobairro;
    }

    set novacidade(ncidade){
        this.cidade = ncidade;
    }

    set novoestado(estado){
        this.estado = estado;
    }
}







let novoendereco = new Endereco("alecri", "rio novo", "Maceio", "Alagoas");


novoendereco.novaRua ="rua do areme" ;


novoendereco.novobairro = "fernonvelho";

novoendereco.novacidade = " boca da mata";

novoendereco.novoestado = "pernanbuco";



console.log(novoendereco);
  
