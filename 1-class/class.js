let animais = {
     cachorro: 'pit-bul',
     cacacteriticar(){
        console.log('farejador policial');
     }
}


let novoANIMAL = Object.create(animais);

novoANIMAL.cachorro = 'labrador';

console.log(novoANIMAL);
novoANIMAL.cacacteriticar();

console.log(animais.cachorro);