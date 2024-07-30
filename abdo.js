let w = window.innerWidth;
function getRandomInt(min,max) {
    return Math.random() * (max - min) + min;
}
function create(){
    let div = document.createElement('div');
    div.className = 'test';
    document.body.appendChild(div);
    div.style.left = `${getRandomInt(30,w-70)}px`;
    div.style.zIndex = '-1';
    setTimeout(()=>{
        div.remove();
    },5000);
}
setInterval(create,50);
