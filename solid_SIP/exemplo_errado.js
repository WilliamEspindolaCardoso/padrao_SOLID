// Interface Segregation

class Animal {
  comer() {}
  andar() {}
  voar() {}
}

// Pinguim é obrigado a implementar classe voar, que está errado, pois ele não voa
class Pinguim extends Animal {
  comer() { console.log("Pinguim comendo peixe."); }
  andar() { console.log("Pinguim andando."); }

  voar() {
    // Pinguim não voa → implementação inútil
    throw new Error("Pinguins não voam!");
  }
}