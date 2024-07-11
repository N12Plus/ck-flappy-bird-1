
function updateGame() {
  ctx.fillStyle = grassColour
  ctx.clearRect(0,0,500,fontSize*2)
  ctx.clearRect(bird.x-1,bird.y-1,beeSize.w+2,beeSize.h+2)
 // ctx.clearRect(0, 0, Width, Height)
  clearPipes()
   kill(coin.x+10,coin.y-10,coin.w+20,coin.h+20)
  ctx.fillStyle = pipeColour
   drawCoin()
  updatePipes()
  updateBird()
  collision()
  drawPipes() 
   ctx.fillStyle = grassColour
  ctx.fillRect(0,grass.y,Width,grass.h)
  ctx.drawImage(img, bird.x, bird.y, beeSize.w, beeSize.h);
  fontSize = Math.round(Height/22);
  ctx.font = `${fontSize}px pixelify sans`
  ctx.fillStyle = "black"
  ctx.fillText("Score: "+score, 0, fontSize)
    
  //requestAnimationFrame(updateGame);
}

//animation = window.requestAnimationFrame(updateGame) 
animation = setInterval(updateGame,30)
//collisions

function collision( ){
  for (i = 0; i < (totalPipes); i++) {
  if (
    bird.x + bird.w >= pipes[i].x && 
    pipes[i].x + pipes[i].w >= bird.x && 
    bird.y + bird.h >= pipes[i].y && 
    pipes[i].y + pipes[i].h >= bird.y 
    )gameover()};
    if (bird.y+bird.h > grass.y || bird.y < -bird.h){gameover()}

//collisions with coins
if (
  bird.x + bird.w >= coin.x && 
  coin.x + coin.w >= bird.x && 
  bird.y + bird.h >= coin.y && 
  coin.y + coin.h >= bird.y 
  ){coins+=1; 
     kill(coin.x-20,coin.y-10,coin.w+30,coin.h+20)
    coin.y = -20};}

// ending game
      
//changes canvas size
ctx.canvas.width = Width
ctx.canvas.height = Height

//restarts
function restart() {
  ctx.clearRect(0,0,Width,Height)
  bird = {x:Width/30, y:Height/4, h:Height/20, w:Height/20}  //resest bird
  for (i = 0; i < totalPipes; i++) {pipes.shift()}
 // console.log(pipes[0].x)                            //deletes pipes
  totalPipes=0 
  score = 0
  createPipe()
  pipeInterval = setInterval(createPipe,interval)
  coin.x = Width
  animation = setInterval(updateGame,30)
  rezbutton.style.display = "none"
  contbutton.style.display = "none"//hides the restart button
  resetCoin()
  currentPipe = 0
  console.log(currentPipe)
  console.log("respawn")

}

