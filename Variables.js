
//Theme 
pipeColour = "saddlebrown"  
grassColour = "lawngreen"  
let x = 0 //0= regular 1=easter 2= christmas 3 = new years 4 = april fools



//game
const Height = window.innerHeight-50
let Width = window.innerWidth-50 //window.innerWidth
//if (window.innerWidth > Height*2/3){
// Width = Height*2/3}
//else { Width = windwo.innerWidth}
const heightMod = Math.round(Height/600)
const widthMod = Math.round(Width/900)
const grass = {y:Height-Height/10,h:Height/10}
let highscore = 0
let coin = {y: Math.random()*Height-200, x:Width, w:Math.round(Height/50), h:Math.round(Height*0.022)}
let coins = 0


let score = 0
let death = "false"
//bee
const gravity = 6*heightMod
let bird = {x:Width/30, y:Height/4, h:Height/20, w:Height/20}
let movement = gravity
const img = new Image();
const imgend = new Image();
const imgrez = new Image();
const imgcoin = new Image();
const imgcontinue = new Image();
const bees = ["regular bee-2.png", "easter bee-2.png", "christmas bee-2.png", "new years bee-4.png","april fools.png"]
const beeRatios = [{w:11,h:10},{w:10.33,h:11},{w:11,h:10},{w:17.5,h:10},{w:10.92,h:10}]
const beeSize = {w:0, h:0}
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

//end screen
yMargins = Math.round(0.147*Height)
rezbutton = document.getElementById('invisibleButton')
contbutton = document.getElementById('invisiblecont')

let z = 0
let fontSize = Math.round(Height/22);
let wit = Width-570