// classe controller para realizar a comunicação entre a view e o model

export class TarefaController{
    constructor(model, view){
        this.model = model; // referência ao model para acessar os dados
        this.view = view; // referência à view para atualizar a interface do usuário
    }
    
    //função que roda no inicio do sistema
    init(){
        // evento para adicionar tarefa
        this.view.addTarefaBtn.addEventListener("click", () => this.addTarefa()); // adiciona um evento de clique ao botão de adicionar tarefa, chamando o método addTarefa

        //renderizar a lista de tarefas
        this.view.renderTarefas(
            this.model.getTarefas(), //pegar as tarefas do model
            (id) => this.atualizarTarefa(id), //função para atualizar tarefa
            (id) => this.removerTarefa(id), //função para remover tarefa
        );// renderiza a lista de tarefas usando o método da view, passando as tarefas do model e as funções de atualização e remoção
        
    }

    //funções para adicionar tarefas
    addTarefa(){
        const titulo = this.view.getTarefaInputValue(); // obtém o valor do input da view para o título da tarefa

        // validação para garantir que o título não esteja vazio
        if(titulo === ""){
            this.view.showMensagem("Por favor, insira o título da tarefa."); // exibe uma mensagem de erro na view se o título estiver vazio
            return; // sai da função para evitar adicionar uma tarefa sem título
        }

        
        this.view.clearMensagem(); // limpa qualquer mensagem anterior na view
        this.model.addTarefa(titulo); // adiciona a tarefa ao model usando o método addTarefa, passando o título da tarefa
        this.view.clearInput(); // limpa o input da view após adicionar a tarefa
        this.updateView(); // atualiza a view para refletir a nova tarefa adicionada
    }

    // função para mudar a tarefa de concluída para não concluída

    atualizarTarefa(id){
        this.model.atualizarTarefa(id); // chama o método atualizarTarefa do model, passando o id da tarefa para atualizar seu estado
        this.updateView(); // atualiza a view para refletir a mudança no estado da tarefa
    }

    // função para remover a tarefa
    removerTarefa(id){
        this.model.removerTarefa(id); // chama o método removerTarefa do model, passando o id da tarefa para removê-la
        this.updateView(); // atualiza a view para refletir a remoção da tarefa
    }

    // função para atualizar a view com as tarefas atuais do model
    updateView(){
        this.view.renderTarefas(
            this.model.getTarefas(), // obtém as tarefas atuais do model para renderizar na view
            (id) => this.atualizarTarefa(id), // função de atualização para passar para a view
            (id) => this.removeTarefa(id) // função de remoção para passar para a view
        ) // renderiza a lista de tarefas usando o método da view, passando as tarefas do model e as funções de atualização e remoção
    }
}
