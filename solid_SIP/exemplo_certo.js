// Interface Segregation

// Criamos interfaces separadas conforme o comportamento real dos animais.
class Come {
  comer() {}
}

class Anda {
  andar() {}
}

class Voa {
  voar() {}
}

// Agora cada animal implementa somente o que realmente usa:
class Pinguim extends Come {
  comer() { console.log("Pinguim comendo peixe."); }
  andar() { console.log("Pinguim andando."); }
}

// Pato implementa comer + andar + voar
class Pato {
  comer() { console.log("Pato comendo."); }
  andar() { console.log("Pato andando."); }
  voar() { console.log("Pato voando."); }
}