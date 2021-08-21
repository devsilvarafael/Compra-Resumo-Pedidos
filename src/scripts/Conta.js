class Conta
{
  #nome;
  #saldo;

  constructor(nome, saldo) 
  {
    this.#nome = nome;
    this.#saldo = 0;
  }

  deposita(valorDeposito) 
  {
    if (valorDeposito < 1) {
      console.error('Valor do deposito deve ser maior que R$0')
    }
    this.#saldo += valorDeposito;
  }

  get recuperaNome() {
    return this.#nome;
  }

  get recuperaSaldo() {
    return this.#saldo;
  }
}

const usuario = new Conta('Rafael');
usuario.deposita(500);