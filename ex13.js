class Endereco {
  constructor(rua, cidade, cep) {
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
  }
}

class Contato {
  constructor(telefone, email) {
    this.telefone = telefone;
    this.email = email;
  }
}

class PerfilUsuario {
  constructor(nome, endereco, contato) {
    this.nome = nome;
    this.endereco = endereco;
    this.contato = contato;
  }

  exibirPerfil() {
    return (
      `Nome: ${this.nome}\n` +
      `Endereço: ${this.endereco.rua}, ${this.endereco.cidade} - CEP: ${this.endereco.cep}\n` +
      `Telefone: ${this.contato.telefone} | Email: ${this.contato.email}`
    );
  }
}

const endereco = new Endereco(
    "Rua das Flores",
    "Campo Grande",
    "79000-000"
);

const contato = new Contato(
    "(67) 99999-9999",
    "isa@email.com"
);

const perfil = new PerfilUsuario(
    "Isa",
    endereco,
    contato
);

console.log(perfil.exibirPerfil());