class ContaBancaria {
    constructor(titular, saldo, numeroConta) {
        this.titular = titular;
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log("Depósito concluído!");
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque concluído!");
        } else {
            console.log("Não é possível realizar o saque!");
        }
    }

    exibirSaldo() {
        return this.saldo;
    }
}