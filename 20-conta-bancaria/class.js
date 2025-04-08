class ContaBancaria{
    constructor(saldoCorrente, saldoPoupanca, jurosDapoupanca){
            this.saldoCorrente = saldoCorrente;
            this.saldoPoupanca = saldoPoupanca;
            this.jurosDapoupanca = jurosDapoupanca;
    }
    

    set depositarcorrrente(valor){
            this.saldoCorrente += valor;
            console.log(`extrato cc ${this.saldoCorrente}`);
    }

    set depositarpoupanca(valor){
        this.saldoPoupanca += valor;
        console.log(`extrato  cp ${this.saldoPoupanca}`);
       
        
    } 

    set saquecorrente(valor){
        this.saldoCorrente -= valor;
        console.log(`extrato de saque cc ${this.saldoCorrente}`);
    }

    set saquepoupanca(valor){
    this.saldoPoupanca -= valor;
    console.log(`extrato  de saque cp ${this.saldoPoupanca}`);
    
    }

  
    trasferenciacp(valor){
        this.saldoCorrente -= valor;
        this.saldoPoupanca += valor;
    }

    trasferenciacc(valor){
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor;
        
    }


    jurosDeaniversario(){
        let juros = (this.saldoPoupanca * this.jurosDapoupanca) / 100 ;
        this.saldoPoupanca += juros;

    }

}



class novacontaEspecial extends ContaBancaria{
    costructor(saldoCorrente, saldoPoupanca, jurosDapoupanca){
         (saldoCorrente,saldoPoupanca,jurosDapoupanca*2);
        

    }
}


let novvaconta = new ContaBancaria(1000, 5000, 1);


novvaconta.depositarcorrrente = 10;

novvaconta.depositarpoupanca = 10;

novvaconta.saquecorrente = 5;

novvaconta.saquepoupanca = 30;

novvaconta.trasferenciacp(1000);

novvaconta.trasferenciacc(400);

console.log(novvaconta)

novvaconta.jurosDeaniversario();

console.log(novvaconta);



let conta2 = new novacontaEspecial(10000, 50000, 1);

console.log(conta2);

conta2.trasferenciacp(500);
conta2.jurosDeaniversario();

conta2.saquepoupanca = 5000;

console.log(conta2);


