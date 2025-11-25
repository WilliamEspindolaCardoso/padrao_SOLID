// Single Responsibility

// A classe Aluno faz tudo
class Aluno {
  constructor(nome, notas) {
    this.nome = nome;
    this.notas = notas;
  }

  validarNotas() {
    return this.notas.every(n => n >= 0 && n <= 10);
  }

  calcularMedia() {
    return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
  }

  enviarMensagemParaPais() {
    console.log(`Enviando mensagem para os pais de ${this.nome}...`);
  }

  gerarBoleto() {
    console.log(`Gerando boleto da mensalidade para ${this.nome}...`);
  }
}