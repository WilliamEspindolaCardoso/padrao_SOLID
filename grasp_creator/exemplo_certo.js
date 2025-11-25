// CREATOR (criador)

// o Banco que deve criar contas
class Conta {
  constructor(numero, titular) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = 0;
  }
}

class Banco {
  constructor() {
    this.contas = [];
  }

  abrirConta(titular) {
    const numeroGerado = this.contas.length + 1;

    const conta = new Conta(numeroGerado, titular); // Creator correto
    this.contas.push(conta);

    return conta;
  }
}

// Controller agora só coordena
class SistemaController {
  solicitarAbertura(banco, titular) {
    return banco.abrirConta(titular);
  }
}