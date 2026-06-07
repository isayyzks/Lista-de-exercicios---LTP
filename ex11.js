class Livro {
  constructor(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }

  toString() {
    return `Livro: "${this.titulo}" por ${this.autor} (${this.paginas} páginas)`;
  }
}

class Filme {
  constructor(titulo, diretor, duracao) {
    this.titulo = titulo;
    this.diretor = diretor;
    this.duracao = duracao;
  }

  toString() {
    return `Filme: "${this.titulo}" dirigido por ${this.diretor} (${this.duracao} min)`;
  }
}

class Musica {
  constructor(titulo, artista, duracao) {
    this.titulo = titulo;
    this.artista = artista;
    this.duracao = duracao;
  }

  toString() {
    return `Música: "${this.titulo}" - ${this.artista} (${this.duracao}s)`;
  }
}

const itens = [
    new Livro("A hipótese do amor", "Ali Hazelwood", 331),
    new Filme("Como Perder um Homem em 10 Dias", "Donald Petrie", 116),
    new Musica("Cê Tá Bem", "Dfideliz", 180)
];

itens.forEach(item => console.log(item.toString()));

