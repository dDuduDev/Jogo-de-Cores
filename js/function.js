    const title = document.getElementById('title')
    const startButton = document.getElementById('iniciar');
    const countDisplay = document.getElementById('count');
    
    function startGameCountdown() {
      startButton.style.display = 'none';
      iniciar.style.display = 'none';
      layout.style.display = "none";
      startCountdown(3, startGame);
    }

    function startGame() {
      countDisplay.textContent = 'GO!';
      // redireciona para outra pagina HTML
      window.location.href = './game.html'
    }
    
    function startCountdown(seconds, callback) {
      if (seconds > 0) {
        countDisplay.textContent = seconds;
        setTimeout(() => {
          startCountdown(seconds - 1, callback);
        }, 1000);
      } else {
        callback();
      }
    }