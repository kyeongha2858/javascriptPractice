const todoFrom = document.querySelector(".js-todoFrom"),
    todoInput = todoFrom.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveTodo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDO(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    const newId = toDos.length +1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);
    const toDoObj ={
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveTodo();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDO(currentValue);
    todoInput.value = "";
}

function loadTodos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(todo){
            paintToDO(todo.text);
        });
    }
}



function init(){
    loadTodos();
    todoFrom.addEventListener("submit",handleSubmit);
}
init();