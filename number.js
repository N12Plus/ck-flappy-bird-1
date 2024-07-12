
//gets all images
 img1.src = "pixel 1 (1).png"
 img2.src = "pixel 2.png"
 img3.src = "pixel 3 (1).png"
 img4.src = "pixel 4.png"
 img5.src = "pixel 5.png"
 img6.src = "pixel 6.png"
 img7.src = "pixel 7.png"
 img8.src = "pixel 8.png"
 img9.src = "pixel 9.png"
 img0.src = "pixel 0.png"
 imgscore.src = "pixel-word-score.png"
 const images = [img0,img1,img2,img3,img4,img5,img6,img7,img8,img9]

 function drawScore() {     //draws the score on game screen

 ctx.drawImage(imgscore,0,20,scorew,numberh)
createNumber(score,0+scorew,20,1)
//draws score and manages spacing
 }

function createNumber(variable,x,y,size,score) {  //variable give the variable that the number will be created from, x and y give the starting positions of the number and size is how many times bigger/smaller than standard the text is, 
seperatevariable(variable)                        //if score = 0 it wont leave space for the word: score otherwise it will
numberh = numberh*size  //makes sure everything increases in size
numberw = numberw*size
space = space*size
ctx.drawImage(images[thousands],x+space*2,y,numberw, numberh)
ctx.drawImage(images[hundreds],x+numberw+3*space,y,numberw, numberh)
ctx.drawImage(images[tens],x+numberw*2+4*space,y,numberw, numberh)  //this needs fixies 12:28 12/7/24
ctx.drawImage(images[units],x+numberw*3+5*space,y,numberw, numberh)
numberh = numberh/size
numberw = numberw/size
space = space/size  //resets dimensions to default
}



function seperatevariable(variable)  {  //seperates score into its digits
thousands =Math.floor(variable/1000)  
hundreds  = Math.floor((variable-thousands*1000)/100)
tens      =Math.floor((variable-thousands*1000-hundreds*100)/10)
units = variable -thousands*1000-hundreds*100-tens*10
}   

function printscore() {  //draws score on end screen
  createNumber(score,Height/3.1, Height/2.65, 2.3,0)
  createNumber(coins,Height/3.3,Height/2.1, 2.3,0)
  createNumber(highscore,Height/1.9,Height/1.7, 2.3,0)

}