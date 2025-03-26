function jogador(correr, pular, diblar, chutar , nome){
  let atleta = Object.create({});
  atleta.correr = correr;
  atleta.pular = pular;
  atleta.diblar = diblar;
  atleta.chutar = chutar;
  atleta.nome = nome;
  atleta.ele = function(){
          console.log('elé é diferenciado.. o homem uma maquina...')
  }
  return atleta;

}

let Novojogador = jogador('40km p hora', '2 mtros', 'elastico', '120km', 'elton');


console.log(Novojogador.pular);
Novojogador.ele();