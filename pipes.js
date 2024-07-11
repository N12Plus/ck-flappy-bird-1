let spawnPipes = 0 
adjustPipes()

function createPipe() {
  gapHeight = Math.random()*(Height - gap-grass.h)  //randomises where the gap is
  pipes.push({x:Width, y:0, h:gapHeight, w:pipeWidth})
  pipes.push({x:Width, y:gapHeight+gap, h:Height, w:pipeWidth})
  totalPipes += 2
}

pipeInterval = setInterval(createPipe,interval)

function updatePipes() {
if (totalPipes > 0) {
  for (i=0; i<totalPipes; i++) {   //iterates throught all the pipes
    pipes[i].x+=pipeSpeed
  }  
  if (pipes[0].x<-(pipeWidth)) {
    pipes.shift()
    pipes.shift()
    totalPipes-=2 
    score += 1
  }
}
}
function getPipe({x,y,h,w}) {     //gets pipe coords so that drawRect can handle them
  ctx.fillRect(x,y,w,h)            //wrong way round
}
function ungetPipe({x,y,h,w}) {
  ctx.clearRect(x,y-1,w,h+2)
}

function drawPipes() {
  for (i=0; i<totalPipes; i++) {   //iterates throught all the pipes
  getPipe(pipes[i])
  }
}
function clearPipes() {
  for (i=0; i<totalPipes; i++) {   //iterates throught all the pipes
  ungetPipe(pipes[i])
  }
}

//stuff was working right here while I was typing i

function adjustPipes() {
  
  spawnPipes = Math.floor((Width-700)/700)
 let w = spawnPipes*700
  for (i = 0; i < spawnPipes; i++) {   
    createPipe()
    pipes[2*i].x = Width-w
    pipes[2*i+1].x = Width-w
    w-=700
  }
  createPipe()
}