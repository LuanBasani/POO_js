class ContaBancaria {
    titular;
    saldo;

    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado! Saldo atual: R$${this.saldo}`);
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado! Saldo atual: R$${this.saldo}`);
        } else {
            console.log(`Saldo insuficiente para saque de R$${valor}. Saldo atual: R$${this.saldo}`);
        }
    }
    exibirSaldo() {
        console.log(`Titular: ${this.titular}\nSaldo: R$${this.saldo}`);
    }
}

let conta1 = new ContaBancaria("João", 1000);
conta1.exibirSaldo();
conta1.depositar(500);
conta1.sacar(200);
conta1.exibirSaldo();