
class Mamifero {
  constructor(patas, cor){
    this.patas = patas;
    this.cor = cor;
  }
}

let coiot = new Mamifero(4, 'preto-branco');

console.log(coiot.patas);
console.log(coiot.cor);


class cachorro extends Mamifero{
        constructor(patas,cor,){
           super(patas,patas,);
           this.cor = cor;
           
        }

        latir(){
          console.log('au au');
        }
}


let Ncachorro = new cachorro(4,'preto-branco');


console.log(new cachorro instanceof Mamifero);
console.log(Mamifero instanceof Object);
console.log(Mamifero instanceof  cachorro);










  
