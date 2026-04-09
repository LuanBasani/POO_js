class Funcionario {
    nome;
    salario;
    cargo;
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    aumentarSalario(percentual) {
        this.salario += this.salario * (percentual / 100);
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome}\nSalário: R$${this.salario.toFixed(2)}\nCargo: ${this.cargo}`);
    }
}

let funcionario1 = new Funcionario("Ana", 3000, "Desenvolvedora");
funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);
funcionario1.exibirInfo();