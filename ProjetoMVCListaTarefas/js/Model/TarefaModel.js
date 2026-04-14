// base da estrutura do aplicativo
// é a classe responsável pela modelagem de dados 

// adicionar uma anotação na classe => export
// que essa classe será usada em outras partes do código
export class TarefaModel {
    // colocar atributos diretamente no construtor
    constructor(){
        this.tarefas = []; // cria uma vetor para as tarefas
        this.currentId = 1; // contador para o id das tarefas
    }

    // métodos
    // add tarefa
    addTarefa(titulo){
        const newTarefa = {
            id: this.currentId++, // atribui o id atual
            titulo: titulo, // atribui o título da tarefa
            completed: false // define a tarefa como não concluída
        };
        this.tarefas.push(newTarefa); // adiciona a nova tarefa ao vetor
    }

    //buscar a tarefas
    getTarefas(){
        return this.tarefas; // retorna o vetor de tarefas
    }

    // atualizar a tarefa (update)
    atualizarTarefa(id){
        const tarefa = this.tarefas.find(tarefa => tarefa.id ===id); // encontra a tarefa pelo id
        if (tarefa){ // se a tarefa for encontrada
            tarefa.completed = !tarefa.completed; // alterna o status de conclusão da tarefa
        }
    }

    // remover a tarefa do vetor (delete)
    removerTarefa(id){
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id)
    }
}

// o que foi feito?
// um crud
// criamos um vetor de tarefas
// geramos um id automatico para as tarefas