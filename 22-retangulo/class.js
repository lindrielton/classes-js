
class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    clacularArea(){
       console.log(`a medidade da area do retangulo é ${ this.largura * this.altura} metros`)
    }

    calcularperimeto(){
        console.log(`a medidade do perimetro é ${ 2 *(this.largura + this.altura)} mt`);
     }
}


let novaMrdida = new Retangulo(20, 10);

novaMrdida.clacularArea();
novaMrdida.calcularperimeto();