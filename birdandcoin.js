//movement detection
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

document.onmousedown = function (e) {movement = jumpspeed }

document.onmouseup = function (e) {setTimeout(falling,50)}

function falling() {movement = gravity}

function updateBird() {
bird.y += movement
}
function resetCoin(){
 z=-0
setTimeout(coinwait, interval/4)}
function coinwait() {
z=1
}

 function newCoin() {
  
  coin.x = Width
   coin.y = Math.random()*(Height-100)
   z=1
 }

function drawCoin() {
  if (z==1) {
  ctx.drawImage(imgcoin,coin.x,coin.y,coin.h,coin.w)

  coin.x += pipeSpeed
  if (coin.x < -(coin.w+10)) {coin.y=-1000; newCoin() }
}
else {coin.x = Width}

}

function kill(x,y,w,h) {
  ctx.clearRect(x,y,w,h)

 }

