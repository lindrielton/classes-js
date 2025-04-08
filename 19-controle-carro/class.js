class carro{
    constructor(marca, cor , gasolinaRestante){
            this.marca = marca;
            this.cor = cor;
            this.gasolinaRestante = gasolinaRestante;
           
    }
    

    dirigirCarro(){
           
        if(this.gasolinaRestante <= 0){
            console.log("cv está sem gasolina");
        }else{
            this.gasolinaRestante -= 4;
            console.log(`sua gasolina atual é ${this.gasolinaRestante} litros`);
        }
       
    }

    abastercer(total){
        if(this.gasolinaRestante <= 0){
            this.gasolinaRestante = total;
            console.log(`seu tanque foi abastecido, vc tem ${this.gasolinaRestante}`);
        }else{
           console.log(`vc  tem ${this.gasolinaRestante}`);

        }
    }

    
}



let ncarro = new carro("bmw", "branca",40);


ncarro.dirigirCarro();
ncarro.dirigirCarro();
ncarro.dirigirCarro();
ncarro.dirigirCarro();
ncarro.dirigirCarro();
ncarro.dirigirCarro();
ncarro.dirigirCarro();
ncarro.dirigirCarro();
ncarro.dirigirCarro();
ncarro.dirigirCarro();
ncarro.abastercer(10);






