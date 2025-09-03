
let random=parseInt(Math.random()*100+1);

let input=document.querySelector('#guessField');
let submit=document.querySelector('#subt');
const preview=document.querySelector('.guesses')
const count=document.querySelector('.lastResult')
const hilo=document.querySelector('.lowOrHi')
let startover=document.querySelector('.resultParas')

let p=document.createElement('p');

let previousguess=[];
let remainning=1;
let playgame=true;

if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        let guess=parseInt(input.value);
        verification(guess);
    })
}

function verification(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number ...");
    }
    else if(guess < 1){
        alert("please enter value b/w 1-100 ");
    }
    else if(guess >100){
        alert("Please enter valueb/w 1-100 ")
    }
    else {
        previousguess.push(guess);
        if(remainning >=10){
            displayguess(guess);
            message(`game over. and the guess no is ${random}`);
            endgame();
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess (guess){
    if(guess === random){
        message(`you guessed right number :${random}`);
        endgame();
    }
    else if (guess < random){
        message("the number is too low...")
    }
    else if (guess > random){
        message("the number is too high...")
    }

}
function displayguess (guess){
    input.value='';
    preview.innerHTML += `${guess} , `
    remainning++;
    count.innerHTML=`${11-remainning}`
}
function message (message){
    hilo.innerHTML=`<h3>${message}</h3>`
}
// function endgame(){
//     input.value='';
//     input.setAttribute('disabled','')
//     playgame=false;
//     p.classList.add('button')
//     p.innerHTML='<h2 id="newGame">start new game.</h2>'
//     startover.appendChild('p')
//     startgame();
    
// }
function endgame(){
    input.value = '';
    input.setAttribute('disabled','');
    playgame = false;
    
    p.classList.add('button');
    p.innerHTML = '<h2 id="newgame">Start New Game</h2>';
    
    startover.appendChild(p);  
    
    startgame();
}

// function startgame(){
//     let newgamebutton=document.querySelector('#newgame');
//     newgamebutton.addEventListener('click',(e)=>{
//         random=parseInt(Math.random()*100+1);
//         previousguess=[]
//         remainning=1;
//         preview.innerHTML=''
//           count.innerHTML=`${11-remainning}`
//           input.removeAttribute('disabled')
//           startover.appendChild(p);
//         playgame=true;
//     })


// }
function startgame(){
    let newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click',(e)=>{
        random = parseInt(Math.random()*100+1);
        previousguess = [];
        remainning = 1;
        preview.innerHTML = '';
        count.innerHTML = `${11-remainning}`;
        input.removeAttribute('disabled');
        startover.removeChild(p);
        playgame = true;
    })
}
