// CREATOR (criador)

// o SistemaController está criando a conta.
class Conta {
  constructor(numero, titular) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = 0;
  }
}

// ERRADO: Controller criando a conta
class SistemaController {
  abrirConta(numero, titular) {
    const conta = new Conta(numero, titular); // violação
    console.log("Conta criada:", conta);
    return conta;
  }
}