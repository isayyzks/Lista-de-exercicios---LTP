class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, cargo, bonus) {
        super(nome, salario, cargo);
        this.equipe = [];
        this.bonus = bonus;
    }

    adicionarMembro(func) {
        this.equipe.push(func);
    }

    calcularSalarioTotal() {
        return this.salario + this.bonus;
    }

}