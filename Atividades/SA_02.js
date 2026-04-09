class Veiculo {
    marca;
    modelo;
    ano;
    
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInfo() {
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}`);
    }
}

class Carro extends Veiculo {
    numPortas;
    constructor(marca, modelo, ano, numPortas) {
        super(marca, modelo, ano);
        this.numPortas = numPortas;
    }
    exibirInfo() {
        super.exibirInfo();
        console.log(`Número de Portas: ${this.numPortas}`);
    }
}

let carro1 = new Carro("Toyota", "Corolla", 2022, 4);
carro1.exibirInfo();

let veiculo1 = new Veiculo("Honda", "Civic", 2020);
veiculo1.exibirInfo();