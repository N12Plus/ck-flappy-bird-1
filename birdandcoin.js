//movement detection for the kinabee (for space key)
resetCoin()
document.onkeydown = function (e) {              
  switch (e.keyCode) {  
   case 32:
    movement = jumpspeed;
    break;}}

  document.onkeyup = function (e) {
  switch (e.keyCode) {  
   case 32:
      setTimeout(falling,50 )}}

//for keyclicks
document.onmousedown = function (e) {movement = jumpspeed }
document.onmouseup = function (e) {setTimeout(falling,50)}
document.ontouchstart = function (e) {movement = jumpspeed}  //should make this work on mobile but I havent tested it yet
document.ontouchend = function (e) {setTimeout(falling,50)}

function falling() {movement = gravity}  //resets gravity to normal

function updateBird() {
bird.y += movement
ctx.drawImage(img, bird.x, bird.y, beeSize.w, beeSize.h);
}
makes sure coins spawn at regular intervals
function resetCoin(){  
 spawnCoin=0
setTimeout(coinwait, interval*5)}

function coinwait() {spawnCoin=1 } //coins only spawn when spawnCoin = 1, 

 function newCoin() {
  coin.x = Width
   coin.y = Math.random()*(Height-100)
   spawnCoin=1
 }

function drawCoin() {

  if (spawnCoin==1 && pipeSpawned > 4) {
  ctx.drawImage(imgcoin,coin.x,coin.y,coin.h,coin.w)
  console.log("?", spawnCoin)
  coin.x += pipeSpeed  //makes coin move
  if (coin.x < -(coin.w+10)) {coin.y=-1000; newCoin() }
}
else {coin.x = Width}
}

function kill(x,y,w,h) {  //delets the coin
  ctx.clearRect(x,y,w,h)
 }

