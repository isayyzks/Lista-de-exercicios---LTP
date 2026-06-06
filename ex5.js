class Usuario{
    #senha;
    constructor(nome,senha){
        this.nome = nome
        this.#senha = senha
    }

    autenticar(senha){
        if(senha == this.#senha){
            return true
        }else{
            return false
        }
    }

    alterarSenha(senhaAtual,novaSenha){
        if(this.autenticar(senhaAtual)){
            this.#senha = novaSenha
        }
    }
}