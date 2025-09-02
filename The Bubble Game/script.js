 let timer = 60;
    let score = 0;
    let hitNum = 0;
    let interval;

    // Generate bubbles
    function makeBubbles() {
      let clutter = "";
      for (let i = 1; i <= 100; i++) {
        let rno = Math.floor(Math.random() * 10);
        clutter += `<div class="ball">${rno}</div>`;
      }
      document.querySelector("#bottom").innerHTML = clutter;
    }

    // Timer function
    function runTimer() {
      interval = setInterval(() => {
        if (timer > 0) {
          timer--;
          document.querySelector("#Timerun").textContent = timer;
        } else {
          endGame();
        }
      }, 1000);
    }

    // New hit number
    function newHit() {
      hitNum = Math.floor(Math.random() * 10);
      document.querySelector("#Hit").textContent = hitNum;
    }

    // Update score
    function increaseScore() {
      score += 10;
      document.querySelector("#scorebord").textContent = score;
    }

    // Handle clicks
    document.querySelector("#bottom").addEventListener("click", function (e) {
      if (e.target.classList.contains("ball")) {
        let clickedNum = Number(e.target.textContent);
        if (clickedNum === hitNum) {
          increaseScore();
          makeBubbles();
          newHit();
        }
      }
    });

    // End game
    function endGame() {
      clearInterval(interval);
      document.querySelector("#bottom").innerHTML = `
        <div id="game-over">
          <h1>Game Over 😊</h1>
          <h2>Your Score: ${score}</h2>
          <button id="restart">Restart</button>
        </div>
      `;
      document.querySelector("#restart").addEventListener("click", resetGame);
    }

    // Reset game
    function resetGame() {
      timer = 60;
      score = 0;
      document.querySelector("#scorebord").textContent = score;
      document.querySelector("#Timerun").textContent = timer;
      makeBubbles();
      newHit();
      runTimer();
    }

    // Start the game
    makeBubbles();
    newHit();
    runTimer();