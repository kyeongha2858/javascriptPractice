const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    gretting = document.querySelector(".js-grettings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGretting(text){
    form.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN);
    gretting.innerText = `Hello ${text}`;
}

function handleSubmit(event){
    event.preventDefault();
    const name = input.value;
    localStorage.setItem("currentUser",name);
    paintGretting(name);
}

function addUser(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        addUser();
    }else{
        paintGretting(currentUser);
    }
}

function init(){
    loadName();
}
init();