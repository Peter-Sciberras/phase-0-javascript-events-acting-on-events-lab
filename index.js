// moveDodgerLeft function
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    let left = parseInt(dodger.style.left);
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }

  // moveDodgerRight function
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    let left = parseInt(dodger.style.left);
    if (left < 360) {
      dodger.style.left = `${left + 5}px`;
    }
  }

  // tying left and right arrow key events
  document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  
  document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowRight") {
      moveDodgerRight();
    }
  });
  