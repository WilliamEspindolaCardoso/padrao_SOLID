// PROTECTED VARIATIONS (Variações Protegidas)

class Pagamento {
  pagar() {}
}

class PagamentoPIX extends Pagamento {
  pagar() { console.log("Pagando via PIX"); }
}

class PagamentoCartao extends Pagamento {
  pagar() { console.log("Pagando com cartão"); }
}