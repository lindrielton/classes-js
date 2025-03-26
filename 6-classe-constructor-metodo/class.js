



function Jogador(time,posicao,){
      this.time = time;
      this.posicao = posicao;
      
   
}

Jogador.prototype.jogar = function(){
      console.log('que jogada lindaaaa');
}

Jogador.prototype.correr = function(){
      console.log('velocidade a 40km');
}



let neymar = new Jogador('barcelo', 'atacante');

console.log(neymar.time);
console.log(neymar.posicao);
neymar.jogar();
neymar.correr();











  
