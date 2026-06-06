class Animal{
    constructor(nome,som){
        this.nome = nome
        this.som = som
    }
    
    emitirSom(){
        return `${this.nome} faz: ${this.som}`
    }
}

class Cachorro extends Animal{
    constructor(nome, som, raca) {
        super(nome, som);
        this.raca = raca;
    }

    emitirSom() {
        return `${this.nome} (${this.raca}) faz: ${this.som}`
    }
}

const cachorro = new Cachorro("Luna", "Au Au", "pinscher");
console.log(cachorro.emitirSom());