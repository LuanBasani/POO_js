//Estudos de POO em JavaScript
// Diferença entre procedural e POO

// declaração de uma variável em procedural

// coleção é um jeito de armazenar dados no tipo chave-valor,
let produto1 = {
    nome: "Impressora",
    preco: 1000,
    marca: "Epstein",
    disponivel: true,
    desconto: function (valor) {
        return this.preco * 0.1; // desconto de 10%
    },
}; // coleção de dados, mas não tem comportamento, ou seja, não tem métodos para manipular os dados

let produto2 = {
    nome: "Mouse",
    preco: 100,
    marca: "Logitech",
    disponivel: false,
    desconto: function (valor) {
        return this.preco * 0.2; // desconto de 10%
    },
};

// imprimir informações do produto

console.log(`
    Produto: ${produto1.nome}
    Preço: R$ ${produto1.preco}
    Marca: ${produto1.marca}
    Disponível: ${produto1.disponivel ? "Sim" : "Não"}
    Desconto: ${produto1.disponivel ? produto1.desconto() : ""}`);

// criação de um obj com uma classe (POO)

class Produto {
  // atributos
    nome;
    preco;
    marca;
    disponivel;

  // métodos construtor
  // no JS o construtor não tem o nome da classe ele chama apenas constructor

    constructor(nome, preco, marca, disponibilidade) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.disponivel = disponibilidade;
    }
  // método de desconto

    desconto() {
        return this.preco * 0.1; // desconto de 10%
    }

  //mostrar as informações do produto
    toString() {
        console.log(`
            Produto: ${this.nome}
            Preço: R$ ${this.preco}
            Marca: ${this.marca}
            Disponível: ${this.disponivel ? "Sim" : "Não"}
            Desconto: ${this.disponivel ? this.desconto() : ""}
            `);
    }
}

// declarar os OBJS
let p1 = new Produto("HeadSet", 200, "Dragon", true);
let p2 = new Produto("Microfone", 600, "Razer", false);

console.log(p1.toString());
console.log(p2.toString());