const title = document.querySelector("#title");

const clicked_class = "clicked";

function handleClick(){
   title.classList.toggle(clicked_class);
}

function init(){
    title.addEventListener("click",handleClick);
}

init();
