//classe para organização da interface da aplicação e interagir com o HTML, ou seja, a View da aplicação. Ela é responsável por pegar os dados do input, mostrar mensagens para o usuário e renderizar a lista de tarefas.
//

export class TarefaView{
    constructor(){
        this.tarefaInput = document.getElementById("tarefaInput"); //entrada de dados da nova tarefa
        this.addTarefaBtn = document.getElementById("addTarefaBtn"); //botão para enviar tarefa
        this.listaTarefas = document.getElementById("listaTarefas"); //ul lista de tarefas 
        this.mensagem = document.getElementById("mensagem"); //p para mensagem
    }

    //métodos
    //pegar a tarefa do input
    getTarefaInputValue(){
        return this.tarefaInput.value.trim();
    }

    //limpar o valor do input
    clearInput(){
        this.tarefaInput.value = "";
    }

    // mandar uma mensagem para o usuário no paragrafo
    showMensagem(texto){
        this.mensagem.textContent = texto;
    }

    clearMensagem(){
        this.mensagem.textContent = "";
    }

    //renderizar a lista de tarefas
    renderTarefas(tarefas, atualizar, remover){
        // limpar a lista existente
        this.listaTarefas.innerHTML = ""; // remove todo html do elemento, ou seja, limpa a lista

        // reconstruir a lista com as tarefas atualizadas
        tarefas.forEach(tarefa => {
            // lógica do laço de repetição
            const li = document.createElement("li"); //cria um elemento li para cada tarefa (criando item da lista)
            if(tarefa.completed){
                li.classList.add("completed"); // adicionando a classe "completed" para tarefas concluídas, para estilização
            }

            const span = document.createElement("span"); //cria um elemento span para o texto da tarefa
            span.textContent = tarefa.titulo; // define o texto do span como o título da tarefa
            
            const action = document.createElement("div"); //cria um elemento div para os botões de ação (atualizar e remover)
            action.classList.add("action"); // adiciona a classe "action" para estilização

            const atualizarBtn = document.createElement("button"); //cria um botão para atualizar a tarefa
            atualizarBtn.textContent = tarefa.completed ? "Desmarcar" : "Marcar"; // o texto do botão muda dependendo se a tarefa está concluída ou não
            atualizarBtn.addEventListener("click", () => atualizar(tarefa.id)); // adiciona um evento de clique para chamar a função de atualização passando o id da tarefa

            //botão para remover a tarefa
            const removerBtn = document.createElement("button"); //cria um botão para remover a tarefa
            removerBtn.textContent = "Remover"; // define o texto do botão como "Remover"
            removerBtn.addEventListener("click", () => remover(tarefa.id)); // adiciona um evento de clique para chamar a função de remoção passando o id da tarefa

            // adiciona os elementos à lista (add ao HTML)

            // add span e a div ao li 
            li.appendChild(span);
            li.appendChild(action);

            // add button a div action 
            action.appendChild(atualizarBtn);
            action.appendChild(removerBtn);

            // add o li a ul listaTarefas
            this.listaTarefas.appendChild(li);
        });
    }
}

// Pega os elementos do Html
// Le um valor do input
// limpa o imput
// Mostra mensgem
// Limpa a Mensagem
// Rederiza a Lista de Tarefas na UL