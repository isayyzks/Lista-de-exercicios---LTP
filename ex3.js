class Produto {
    static totalProdutos = 0;

    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        Produto.totalProdutos++;
    }

    static obterTotal() {
        return Produto.totalProdutos;
    }

    calcularValorEstoque() {
        return this.preco * this.quantidade;
    }
}