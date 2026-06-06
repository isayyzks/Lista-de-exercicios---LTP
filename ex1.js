class Pessoa {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    apresentar() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e meu email é ${this.email}`);
    }

    fazerAniversario() {
        this.idade += 1;
    }
}