
/*Crie uma classe chamada "Livro" que representa um livro em um sistema de biblioteca.

A classe deve ter os seguintes atributos:

titulo: representando o título do livro (string).

autor: representando o autor do livro (string).

disponivel: representando a disponibilidade do livro (boolean).

A classe deve ter os seguintes métodos:

emprestar(): verifica se o livro está disponível para empréstimo e, se estiver, atualiza a disponibilidade para false.

devolver(): verifica se o livro não está disponível para empréstimo e, se não estiver, atualiza a disponibilidade para true.

consultarDisponibilidade():  : retorna a disponibilidade atual do livro.*/

class Livro{
    constructor(titulo, disponivel, ){
             this.titulo = titulo;
             this.disponivel = disponivel;
    }
    
    emprestar(){
        if(this.disponivel === true){
            console.log('o livro acabou de ser locado');
            this.disponivel = false;
        }
    }

    devolver(){
        if(this.disponivel == false){
            console.log('o livro já está disponivel para um novo  empréstimo');
            this.disponivel = true;
        }
    }

    consultarDisponibilidade(){
        console.log(`atualmente o livro está ${this.disponivel} para empréstimo`);
    }
}




let NovoLIvro = new Livro('o poder do hábito' , true);


NovoLIvro.emprestar()
console.log(NovoLIvro);

NovoLIvro.devolver()
console.log(NovoLIvro);

NovoLIvro.consultarDisponibilidade();

/*Crie uma classe chamada “Funcionário” com atributos para armazenar o nome, o salário e o cargo do funcionário. Implemente métodos para calcular o salário líquido, considerando descontos de impostos e benefícios.

Implemente uma classe chamada “Produto” que possua atributos para armazenar o nome, o preço e a quantidade em estoque. Adicione métodos para calcular o valor total em estoque e verificar se o produto está disponível.

Crie uma classe chamada “Triângulo” com atributos para armazenar os três lados do triângulo. Implemente métodos para verificar se é um triângulo válido e calcular sua área.

Implemente uma classe chamada “Carro” com atributos para armazenar a marca, o modelo e a velocidade atual do carro. Adicione métodos para acelerar, frear e exibir a velocidade atual.

Crie uma classe chamada “Paciente” que possua atributos para armazenar o nome, a idade e o histórico de consultas de um paciente. Implemente métodos para adicionar uma nova consulta ao histórico e exibir as consultas realizadas.*/