class ValorAssinatura {
  #valor;

//Definir valor da assinatura (*)
  constructor(valorPagar) {
    this.#valor = 500;
  }

  get recuperaAssinatura() {
    return this.#valor;
  }
}

const assign = new ValorAssinatura();