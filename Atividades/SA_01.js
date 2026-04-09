class Produto {
    nome;
    preco;
    estoque;
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    
    vender (quantidade) {
        if (this.estoque >= quantidade) {
            this.estoque -= quantidade;
            console.log(`Produto ${this.nome} vendido! Estoque restante: ${this.estoque}`);
        } else {
            console.log(`Produto ${this.nome} está fora de estoque.`);
        }
    }

    repor(quantidade) {
        this.estoque += quantidade;
        console.log(`Produto ${this.nome} reposto! Estoque atual: ${this.estoque}`);
    }

    exibirInfo() {
        console.log(`Produto: ${this.nome}\nPreço: R$${this.preco}\nEstoque: ${this.estoque}`);
    }
}

let produto1 = new Produto("Notebook", 2500, 10);
produto1.exibirInfo();
produto1.vender(3);
produto1.repor(5);
produto1.exibirInfo();