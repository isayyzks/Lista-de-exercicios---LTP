class ContaBancaria {
  #saldo;

  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log("Valor de depósito inválido.");
      return;
    }

    this.#saldo += valor;
    console.log(`Depósito de R$${valor}. Saldo: R$${this.#saldo.toFixed(2)}`);
  }

  sacar(valor) {
    if (valor > this.#saldo) {
      console.log("Saldo insuficiente! Saque não realizado.");
    } else {
      this.#saldo -= valor;
      console.log(`Saque de R$${valor}. Saldo: R$${this.#saldo.toFixed(2)}`);
    }
  }

  get saldo() {
    return this.#saldo;
  }

  static converterParaDolarCanadense(reais) {
    const taxa = 0.27; // taxa aproximada
    return (reais * taxa).toFixed(2);
  }
}
