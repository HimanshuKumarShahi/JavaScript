//generate random color

let randomcolor=function(){
    let hexcode="0123456789ABCDEF";
    let color="#";
    for(i=0;i<6;i++){
        color += hexcode[Math.floor(Math.random()*16)];
    }
    return color;
}
    let id;

const startcolorchange=function(){
    if(!id){
        id= setInterval(changebg,1000)
    }
    function changebg(){
        document.body.style.backgroundColor=randomcolor();
    }
}
const stopcolorchange=function(){
    clearInterval(id);
    id=null;
}

document.querySelector('#start').addEventListener('click',startcolorchange)

document.querySelector('#stop').addEventListener('click',stopcolorchange)