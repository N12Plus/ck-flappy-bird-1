
//Theme 
pipeColour = "red"  //change these to change theme, saddlebrown for normal
grassColour = "rgb(10, 117, 17)"  //lawngreen for normal
let x = 2 //0= regular 1=easter 2=christmas 3=new years 4=april fools

//game
const Height = window.innerHeight-50
let Width = window.innerWidth-50 //window.innerWidth
const heightMod = Math.round(Height/600)  //these two variables help make sure evrything scales up correctly
const widthMod = Math.round(Width/900)
const grass = {y:Height-Height/10,h:Height/10}  //The ground
let highscore = 0
let coin = {y: Math.random()*Height-200, x:Width, w:Math.round(Height/50), h:Math.round(Height*0.022)}  //defines the coin
let coins = 0 
let score = 0
let spawnCoin = 0

//bee/ bird sometimes
const gravity = 6*heightMod
let bird = {x:Width/30, y:Height/4, h:Height/20, w:Height/20} //defines th birrd
let movement = gravity  //direction the bird is moving thiss changes when mouse/space pressed
const bees = ["regular bee-2.png", "easter bee-2.png", "christmas bee-2.png", "new years bee-4.png","april fools.png"]  //lsit of all bee costumes so its easier to switch between them
const beeRatios = [{w:11,h:10},{w:10.33,h:11},{w:11,h:10},{w:17.5,h:10},{w:10.92,h:10}]   //makes sure bees arent squashed or stretched too muh
const beeSize = {w:0, h:0}  //changes based on height/width 
const jumpspeed = gravity*-1.5

//calculates the size of the bee based on the size of the screen and the ratios
let multiplier = bird.h/10.5
beeSize.h =10*multiplier
beeSize.w =beeRatios[x].w*multiplier

//pipes
const pipeSpeed = -5
const pipeWidth = 75
const gap = 110*heightMod
let totalPipes = 0
let gapHeight = Math.round(Math.random()*(Height-gap))
let pipes = []
const interval = 4000

//canvas
const c = document.getElementById("myCanvas"); 
const ctx = c.getContext("2d");
ctx.canvas.width = Width
ctx.canvas.height = Height

//end screen
yMargins = Math.round(0.147*Height)
rezbutton = document.getElementById('invisibleButton')
contbutton = document.getElementById('invisiblecont')

//numbers
let thousands = 0  //this will be changed later
let hundreds = 0
let tens = 0
let units = 0
let numberh = 14*heightMod  //defiing height width etc of score text displayed on game screen
let numberw = 10*heightMod
let space = 5*heightMod
let scorew = 48*heightMod

//images
const img = new Image();
const imgend = new Image();
const imgrez = new Image();
const imgcoin = new Image();
const imgcontinue = new Image();
const img1 = new Image();
const img2 = new Image();
const img3 = new Image();
const img4 = new Image();
const img5 = new Image();
const img6 = new Image();
const img7 = new Image();
const img8 = new Image();
const img9 = new Image();
const img0 = new Image();  
const imgscore = new Image();

//more images defined
img.src = bees[x]  
imgend.src = "Kinabee end screen.png"
imgrez.src = "Kinaretry.png"
imgcoin.src = "costume4 (1).png"
imgcontinue.src = "KinacontinueB3.png"