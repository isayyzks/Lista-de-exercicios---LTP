class Pagamento {
  constructor(valor) {
    this.valor = valor;
  }

  processar() {
    throw new Error("processar() deve ser implementado pela subclasse");
  }
}

class CartaoCredito extends Pagamento {
  constructor(valor, parcelamento) {
    super(valor);
    this.parcelamento = parcelamento;
  }

  processar() {
    const parcela = (this.valor / this.parcelamento).toFixed(2);
    return `Cartão de Crédito: R$${this.valor} em ${this.parcelamento}x de R$${parcela}`;
  }
}

class Pix extends Pagamento {
  constructor(valor, chavePix) {
    super(valor);
    this.chavePix = chavePix;
  }

  processar() {
    return `Pix: R$${this.valor} para a chave ${this.chavePix}`;
  }
}

class Boleto extends Pagamento {
  constructor(valor, codigoDeBarras) {
    super(valor);
    this.codigoDeBarras = codigoDeBarras;
  }

  processar() {
    return `Boleto: R$${this.valor} | Código: ${this.codigoDeBarras}`;
  }
}

function processarTodos(pagamentos) {
  pagamentos.forEach(p => console.log(p.processar()));
}

const pagamentos = [
    new CartaoCredito(1000, 5),
    new Pix(250, "isa@email.com"),
    new Boleto(500, "123456789")
];

processarTodos(pagamentos);