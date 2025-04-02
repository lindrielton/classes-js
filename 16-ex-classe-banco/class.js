class banco {
  constructor(saldo){
      this.saldo = saldo;
  }
  
  deposito(valor){
       valor = this.saldo + valor;
       console.log('seu saldo é ', + valor);
  }

  saque(val){
      val = this.saldo - val;
      console.log('seu saldo é ' + val);
  }


}



let cliente = new banco(5000);

cliente.deposito(1000);
cliente.saque(2000);








  
