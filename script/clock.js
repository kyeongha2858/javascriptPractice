const clockContainer = document.querySelector(".js-clock"), 
    clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const Hour = date.getHours();
    const Minutes = date.getMinutes();
    const Seconds = date.getSeconds();

    clockTitle.innerText = `${Hour < 10 ? `0${Hour}` : `${Hour}`}:${Minutes < 10 ? `0${Minutes}` : `${Minutes}`}:${Seconds < 10 ? `0${Seconds}` : `${Seconds}`}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}
init();