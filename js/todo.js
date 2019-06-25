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

        todoElement.appendChild(todotext);
        listElement.appendChild(todoElement)
    }
}


renderTodos();


function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;