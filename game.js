window.addEventListener("load", () => {
  const canvas = document.querySelector("#display");
  const ctx = canvas.getContext("2d");

  const L = [
    [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 1, 1, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    [
      [0, 1, 1, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1],
    ],
    [
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
  ];

  function drawPiece() {
    const angle = Math.floor(Math.random() * L.length);
    const piece = L[angle];
    let posX = 10;
    let posY = 10;
    piece.map((item) => {
      posY += 10;
      item.map((value) => {
        if (value === 0) {
          posX += 10;
          ctx.fillStyle = "white";
          ctx.fillRect(posX, posY, 10, 10);
        }
        if (value === 1) {
          posX += 10;
          ctx.fillStyle = "red";
          ctx.fillRect(posX, posY, 10, 10);
        }
      });
      posX = 10;
    });
  }
  addEventListener("keypress", (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPiece();
  });
});
