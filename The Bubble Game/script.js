let timer = 60;
let score = 0;
let h=0;
function makebubble() {
  let clutter = "";
  for (let i = 1; i <= 168; i++) {
    let rno = Math.floor(Math.random() * 10);
    clutter += `<div class="ball">${rno}</div>`;
  }
  document.querySelector("#bottom").innerHTML = clutter;
}

function runTimer() {
  let T = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#Timerun").textContent = timer;
    } else {
      clearInterval(T);
      document.querySelector("#bottom").innerHTML = `<h1>Game Over😊</h1><h2>Your score: ${score}</h2>`;

    }
  }, 1000);
}
function newhit() {
   h = Math.floor(Math.random() * 10);
  document.querySelector("#Hit").textContent = h;
}
function newscore() {
  score += 10;
  document.querySelector("#scorebord").textContent = score;
}


document.querySelector("#bottom")
  .addEventListener("click", function (details) {
    let newno= Number(details.target.textContent);
    if(newno===h){
      newscore();
      makebubble();
      newhit();
    }
  });
makebubble();
runTimer();
newhit();
