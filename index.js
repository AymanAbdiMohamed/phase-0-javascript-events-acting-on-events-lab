const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);

  if (left < 360) { // container is 400px wide, dodger is 40px
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
