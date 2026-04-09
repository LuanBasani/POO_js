//classe para organização da interface da aplicação]
//

export class TarefaView{
    constructor(){
        this.tarefaInput = document.getElementById("tarefaInput"); //entrada de dados da nova tarefa
        this.addTarefaBtn = document.getElementById("addTarefaBtn"); //entrada de dados da nova tarefa
        this.listaTarefas = document.getElementById("listaTarefas"); //ul lista de tarefas 
        this.mensagem = document.getElementById("mensagem"); //p para mensagem
        
    }
    
    //métodos
    //pegar a tarefa do input
    getTarefaInputValue(){
        return this.tarefaInput.value.trim(); // 
    }

    // limpar o campo de input
    clearInput(){
        this.tarefaInput.value = "";
    }

        // exibir mensagem de feedback
    showMensagem(texto){
        this.mensagem.textContent = texto;
    }

    clearMensagem(){
        this.mensagem.textContent = "";
    }

    // renderizar a lista de tarefas
    // exibir as tarefas na tela
    exibirTarefas(tarefas){
        this.listaTarefas.innerHTML = ""; // limpa a lista antes de renderizar

        tarefas.forEach(tarefa => {
            const li = document.createElement("li");
            li.setAttribute("data-id", tarefa.id);
            
            if(tarefa.completed){
                li.classList.add("completed");
            }

            li.innerHTML = `
                <span>${tarefa.titulo}</span>
                <div>
                    <button class="btn-concluir">${tarefa.completed ? 'Desfazer' : 'Concluir'}</button>
                    <button class="btn-remover">Remover</button>
                </div>
            `;

            this.listaTarefas.appendChild(li);
        });
    }

    // vincular o evento de adicionar tarefa
    bindAddTarefa(handler){
        this.addTarefaBtn.addEventListener("click", () => {
            const titulo = this.getTarefaInputValue();
            handler(titulo);
        });
    }

    // vincular eventos de clique na lista (remover e concluir)
    bindTarefaEvents(handlerUpdate, handlerRemove){
        this.listaTarefas.addEventListener("click", (event) => {
            const id = parseInt(event.target.closest("li").getAttribute("data-id"));

            if(event.target.classList.contains("btn-concluir")){
                handlerUpdate(id);
            }

            if(event.target.classList.contains("btn-remover")){
                handlerRemove(id);
            }
        });
        
        
    }
}