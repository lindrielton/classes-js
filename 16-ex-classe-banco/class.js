class Banco {
  constructor(saldo){
      this.saldo = saldo;
  }
  
  deposito(valor){
        this.saldo += valor;
        return (`seu saldo mudou ${ this.saldo }`);
  }

  saque(valor){
      this.saldo -= valor;
      return this.saldo + ' seu saldo foi alterado';
  }


}



let cliente = new Banco(5000);

console.log(cliente.deposito(1000));
console.log(cliente.saque(2000));










  
