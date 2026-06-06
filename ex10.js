class Veiculo {
    constructor(marca, modelo, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    acelerar(valor) {
        this.velocidade += valor;
        console.log(`${this.modelo} acelerou para ${this.velocidade} km/h`);
    }

    frear(valor) {
        this.velocidade = Math.max(0, this.velocidade - valor);
        console.log(`${this.modelo} freou para ${this.velocidade} km/h`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, velocidade, combustivel, litrosNoTanque) {
        super(marca, modelo, velocidade);
        this.combustivel = combustivel;
        this.litrosNoTanque = litrosNoTanque;
    }
}

class CarroEletrico extends Carro {
    constructor(marca, modelo, velocidade, bateriaKwh) {
        super(marca, modelo, velocidade, null, 0);
        this.bateriaKwh = bateriaKwh;
    }

    acelerar(valor) {
        const consumo = valor * 0.1;
        this.bateriaKwh = Math.max(0, this.bateriaKwh - consumo);

        super.acelerar(valor);

        console.log(`Bateria restante: ${this.bateriaKwh.toFixed(1)} kWh`);
    }
}