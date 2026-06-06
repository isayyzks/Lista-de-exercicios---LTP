class Aluno {
  #nota;

  constructor(nome, nota) {
    this.nome = nome;
    this.#nota = nota;
  }

  get nota() {
    return this.#nota;
  }

  set nota(valor) {
    if (valor < 0 || valor > 10) {
      console.log("Nota inválida! Deve ser entre 0 e 10.");
    } else {
      this.#nota = valor;
    }
  }

  static calcularMedia(nota1, nota2) {
    return ((nota1 + nota2) / 2).toFixed(1);
  }
}
