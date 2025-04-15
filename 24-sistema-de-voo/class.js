

/*
Crie uma classe chamada "Voo" que representa um voo em um sistema de reservas de voo.

A classe deve ter os seguintes atributos:

codigoVoo: representando o código único do voo (string ou número).

origem: representando a cidade de origem do voo (string).

destino: representando a cidade de destino do voo (string).

assentosDisponiveis: representando a quantidade de assentos disponíveis no voo (número).

A classe deve ter os seguintes métodos:

reservarAssento(): verifica se há assentos disponíveis no voo e, se houver, decrementa a quantidade de assentos disponíveis em um.

consultarAssentosDisponiveis(): retorna a quantidade de assentos disponíveis no voo.*/

class  Voo{
    constructor(codigovoo, cdHorigen, cdDestino, acentosDisponiveis ){
        this.codigovoo = codigovoo;
        this.cdHorigen = cdHorigen;
        this.cdDestino = cdDestino;
        this.acentosDisponiveis = acentosDisponiveis;
    }

    reservarAssento(valor){
                if(this.acentosDisponiveis > valor){
                    this.acentosDisponiveis -= valor
                }else{
                    console.log(`esse numeero de lugares não esta mais disponivel só tem ${this.acentosDisponiveis} no momento`)
                }
        }

    consultarAssentosDisponiveis(){
           console.log(` só existe ${this.acentosDisponiveis} no momento`)

    }
}



let novovoo = new Voo(1234, 'são paulo', 'Maceió AL', 30)


novovoo.reservarAssento(20);
console.log(novovoo);
novovoo.consultarAssentosDisponiveis();


/*Crie uma classe chamada "Livro" que representa um livro em um sistema de biblioteca.

A classe deve ter os seguintes atributos:

titulo: representando o título do livro (string).

autor: representando o autor do livro (string).

disponivel: representando a disponibilidade do livro (boolean).

A classe deve ter os seguintes métodos:

emprestar(): verifica se o livro está disponível para empréstimo e, se estiver, atualiza a disponibilidade para false.

devolver(): verifica se o livro não está disponível para empréstimo e, se não estiver, atualiza a disponibilidade para true.

consultarDisponibilidade(): r




