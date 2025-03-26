function criarCachorro(raca,cor,patas){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.cor = cor;
    cachorro.partas = patas;
    cachorro.morder = function() {
      console.log('modida')
    };
    return cachorro;
}

let caniCurso = criarCachorro('canicurso', 'preto', 4);

caniCurso.morder();
console.log(caniCurso.raca);