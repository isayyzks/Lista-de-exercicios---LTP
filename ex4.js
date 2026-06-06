class Temperatura {
    #celsius;

    constructor(celsius) {
        this.#celsius = celsius;
    }

    get celsius() {
        return this.#celsius;
    }

    set celsius(valor) {
        this.#celsius = valor;
    }

    get fahrenheit() {
        return (this.celsius * 9 / 5) + 32;
    }

    get kelvin() {
        return this.celsius + 273.15;
    }

    set fahrenheit(valor) {
        this.#celsius = (valor - 32) * 5 / 9;
    }

    set kelvin(valor) {
        this.#celsius = valor - 273.15;
    }
}
