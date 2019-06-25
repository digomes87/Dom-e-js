var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = [
    'Fazer café',
    'Estudar',
    'Compartilhar no Github'
];


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


function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    salveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    salveToStorage();
}


//usando o storage para salvar dados
function salveToStorage(){  
    localStorage.setItem('list_todos', JSON.stringify(todos));
}