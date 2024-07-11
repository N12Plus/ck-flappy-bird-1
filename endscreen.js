rezbutton.style.display = "none"
contbutton.style.display = "none"
function drawText() {
if (score>highscore) {highscore = score}

  const text1 = score;
  const text2 = coins
  const text3 =  highscore
   fontSize = Math.round(Height/11);

  // Set the font size
  ctx.font = `${fontSize}px pixelify sans`;

  // Calculate the vertical position (centered)
  const textY = Height / 2 

  // Set text alignment and color
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle'; // Center the text vertically
  ctx.fillStyle = 'black';

  // Draw the text at the left edge
  ctx.fillText(text1, Height/3, Height/2.5);
  ctx.fillText(text2,Height/3.2,Height/2)
  ctx.fillText(text3,Height/1.8,Height/1.62)
  restartbutton()
}

function restartbutton() {

    if (Height > Width) {
    ctx.drawImage(imgrez, Width/2-157*heightMod, Height/1.2, 282*heightMod, 84*heightMod);
    ctx.drawImage(imgcontinue, Width/2-157*heightMod, Height/1.5, 300*heightMod, 84*heightMod)
     }


  contbutton.style.left = `0px`;
  contbutton.style.top = `${Height/1.5}px`;
  contbutton.style.width = `${Width}px`;
  contbutton.style.height = `${90*heightMod}px`;
  contbutton.addEventListener('click', continuegame )
  contbutton.style.display = "block"
  rezbutton.style.left = `0px`;
  rezbutton.style.top = `${Height/1.2}px`;
  rezbutton.style.width = `${Width}px`;
  rezbutton.style.height = `${90*heightMod}px`;
  rezbutton.addEventListener('click', restart )
  rezbutton.style.display = "block"
  
}

function continuegame() {
  if (coins > 4) {
  let y = score
  restart()
  score = y
  coins -= 5}
}

function gameover() {
  clearInterval(animation)
setTimeout(gameoverstuff,500)
}
function gameoverstuff() { 
  ctx.fillStyle = "White"
  ctx.fillRect(0,0,Width,Height)

  ctx.drawImage(imgend, 0, yMargins, Height*2/3, Height-yMargins*2)
  drawText()  
   clearInterval(pipeInterval)
}   




