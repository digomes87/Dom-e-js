var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// aqui usamo o lacalstorage para buscar os dados ja armazenados
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todotext = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')') 
        var linktext = document.createTextNode('Excluir');

        linkElement.appendChild(linktext);
        todoElement.appendChild(todotext);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement)
    }
}

renderTodos();

// adicionando conteudo a lista de li
function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    salveToStorage();
}

//inserindo conteudo na li ao clicar no btn, evento é inserido aqui
buttonElement.onclick = addTodo;


//funcao de deletar
function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    salveToStorage();
}


//usando o storage para salvar dados
function salveToStorage(){  
    localStorage.setItem('list_todos', JSON.stringify(todos));
}