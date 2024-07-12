let spawnPipes = 0 
adjustPipes()

function createPipe() {
  gapHeight = Math.random()*(Height - gap-grass.h)  //randomises where the gap is
  pipes.push({x:Width, y:0, h:gapHeight, w:pipeWidth})  //creates a pipe objecta and adds it to the array
  pipes.push({x:Width, y:gapHeight+gap, h:Height, w:pipeWidth})
  totalPipes += 2
}

pipeInterval = setInterval(createPipe,interval)  //creates the pipes 

function updatePipes() {
if (totalPipes > 0) {
  for (i=0; i<totalPipes; i++) {   //iterates throught all the pipes and chnages their x positions
    pipes[i].x+=pipeSpeed
  }  
  if (pipes[0].x<-(pipeWidth)) {  //deletes pipes when they exit the screen and increases score
    pipes.shift()
    pipes.shift()
    totalPipes-=2 
    score += 1
  }
}
}
function getPipe({x,y,h,w}) {     //gets pipe coords so that drawRect can handle them
  ctx.fillRect(x,y,w,h)            
}
function ungetPipe({x,y,h,w}) {       //same as above except for clearRect
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


function adjustPipes() {  //this makes pipes move forward on wider screens so you dont wait too long for the first pipe
  
  spawnPipes = Math.floor((Width-700)/700)  //how many pipes should be immediatley spawned the first 700 can be changed depending on how long you want between the bird and the first pipe
 let w = spawnPipes*700
  for (i = 0; i < spawnPipes; i++) {   
    createPipe()
    pipes[2*i].x = Width-w
    pipes[2*i+1].x = Width-w
    w-=700
  }
  createPipe()
}