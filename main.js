canvas-
  document.getElementById("mycanvas")
ctx= canvas.getcontext("2d")

ctx.beginPath();
ctx.strokeStyle -"grey";
ctx.lineWidth - 1;
ctx.rect(50,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle -"grey";
ctx.lineWidth - 1;
ctx.arc(50,143,430,200);
ctx.stroke();