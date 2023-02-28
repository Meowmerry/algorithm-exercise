document.addEventListener("keydown", function (event) {
  event.preventDefault()
}, false);


document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const board = document.querySelector("#board");
  const header = document.querySelector("#title")

  const head = new Head(board, header);
  //const apple = new Apple(board);

  body.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
      if (head.currentDirection !== "right") {
        head.currentDirection = "left";
      }
    } else if (e.code === "ArrowRight") {
      if (head.currentDirection !== "left") {
        head.currentDirection = "right";
      }
    } else if (e.code === "ArrowDown") {
      if (head.currentDirection !== "top") {
        head.currentDirection = "bottom";
      }
    } else if (e.code === "ArrowUp") {
      if (head.currentDirection !== "bottom") {
        head.currentDirection = "top";
      }
    }
  });
});