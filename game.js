
function updateGame() {
  ctx.clearRect(bird.x-1,bird.y-1,beeSize.w+2,beeSize.h+2)  //deletes bee
  ctx.clearRect(0,20,scorew+numberw*4+6*space,numberh)  //deletes score
  clearPipes()  //delets pipes
   kill(coin.x+10,coin.y-10,coin.w+20,coin.h+20)  //deletes coin
   drawCoin()  
   ctx.fillStyle = pipeColour
  updatePipes()  
  updateBird()  
  drawPipes()
  drawScore() //moves and draws everything
  collision() //detects collisons
   ctx.fillStyle = grassColour
  ctx.fillRect(0,grass.y,Width,grass.h)  //draws floor
}


animation = setInterval(updateGame,30)  //couldnt get window.requestAnimationFrame() to work
 

function collision( ){
  //collisions with pipes
  for (i = 0; i < (totalPipes); i++) {
  if (
    bird.x + bird.w >= pipes[i].x && 
    pipes[i].x + pipes[i].w >= bird.x && 
    bird.y + bird.h >= pipes[i].y && 
    pipes[i].y + pipes[i].h >= bird.y 
    )gameover()};
    //collsions with floor/roof
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
//gameover function is in endscreen.js


//restarts
function restart() {
  //resets stuff
  spawnPipes = 0 
  ctx.clearRect(0,0,Width,Height)
  bird = {x:Width/30, y:Height/4, h:Height/20, w:Height/20}  //resest bird
  for (i = 0; i < totalPipes; i++) {pipes.shift()}
 // console.log(pipes[0].x)                            //deletes pipes
  totalPipes=0 
  score = 0
  adjustPipes()
//restarting game
  pipeInterval = setInterval(createPipe,interval)
  coin.x = Width
  animation = setInterval(updateGame,30)
  rezbutton.style.display = "none"
  contbutton.style.display = "none"//hides the restart buttons
  resetCoin()
}

