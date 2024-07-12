rezbutton.style.display = "none"
contbutton.style.display = "none"  //buttons cannot be clicked

function drawText() {
 if (score>highscore) {highscore = score}
  printscore()
  restartbutton()
}

function restartbutton() {
  
    ctx.drawImage(imgrez, Width/2-157*heightMod, Height/1.2, 282*heightMod, 84*heightMod);  //draws the restart buttons
    ctx.drawImage(imgcontinue, Width/2-157*heightMod, Height/1.5, 300*heightMod, 84*heightMod)
    
  contbutton.style.left = `0px`;
  contbutton.style.top = `${Height/1.5}px`;
  contbutton.style.width = `${Width}px`;
  contbutton.style.height = `${90*heightMod}px`;
  contbutton.addEventListener('click', continuegame )  //places the two invisible buttons
  contbutton.style.display = "block"
  rezbutton.style.left = `0px`;
  rezbutton.style.top = `${Height/1.2}px`;
  rezbutton.style.width = `${Width}px`;
  rezbutton.style.height = `${90*heightMod}px`;
  rezbutton.addEventListener('click', restart )
  rezbutton.style.display = "block"
  
}

function continuegame() {  //lets you continue game and keep score
  if (coins > 4) {
  let y = score
  restart()
  score = y
  coins -= 5}
}

function gameover() { //ends the game and clears a few intervals
  clearInterval(animation)
setTimeout(gameoverstuff,500)
}
function gameoverstuff() { //fills the screen with white for the endscreen 
  ctx.fillStyle = "White"
  ctx.fillRect(0,0,Width,Height)

  ctx.drawImage(imgend, 0, yMargins, Height*2/3, Height-yMargins*2)  //draws the end screen (or part of it)
  drawText()  
   clearInterval(pipeInterval)
   pipeSpawned = 0
}   




