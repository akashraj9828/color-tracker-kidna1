var video
var re = 0
var gr = 0
var bl = 0
var al = 0
var px = 0
var rad = 0
var blau = 0
var gran = 0
var alpi = 0
var x=0
var y=0
var sensitivity

var canvas
function setup() {
  canvas=createCanvas(400, 400)
  canvas.position((windowWidth-width)/2,(windowHeight-height)/2)
  video = createCapture(VIDEO)
  video.size(40,40)
  video.position(windowWidth-video.height,windowHeight-video.height)
  sensitivity=createSlider(1,200,30,1)
  sensitivity.position(20,30)

}
function getclr(xp, yp) {
  x = floor(constrain(xp, 0, width))
  y = floor(constrain(yp, 0, height))
  px = (x + y * width) * 4
  rad = px
  gran = rad + 1
  blau = rad + 2
  alpi = rad + 3
  re = pixels[rad]
  gr = pixels[gran]
  bl = pixels[blau]
  al = pixels[alpi]

}
function draw() {
  threshold=sensitivity.value()
  background(255)
  image(video, 0, 0, 400, 400)
  r = re
  g = gr
  b = bl
  a=al
  loadPixels()
  for (i = 0; i < width * height; i++)
  {
  pixel = i * 4
  red = pixel
  green = pixel + 1
  blue = pixel + 2
  alpha = pixel + 3
  off = 1
  simm = floor(dist(r, g, b,pixels[red], pixels[green], pixels[blue]))
  if(simm<threshold){
  pixels[red]=255
  pixels[green]=0
  pixels[blue]=0
  pixels[alpha]=200
}


}
log(simm)
updatePixels()
}

function mouseClicked() {
getclr(mouseX, mouseY)
}
