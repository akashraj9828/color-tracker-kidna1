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
var x = 0
var y = 0
var sensitivity

var video_w = 600;
var video_h = 400;
var threshold = 40;

var canvas
function setup() {
  canvas = createCanvas(video_w, video_h)
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2)
  video = createCapture(VIDEO)
  video.size(video_w / 10, video_h / 10)
  video.position(windowWidth / 2 + width / 2, windowHeight / 2 + height/2 - video.height  )
  sensitivity = createSlider(1, 200, 30, 1)
  sensitivity.position(20, 30)

}
function getclr(xp, yp) {
  x = floor(constrain(xp, 0, width))
  y = floor(constrain(yp, 0, height))
  px = (x + y * width) * 4
  rad = px
  gran = rad + 1
  blau = rad + 2
  re = pixels[rad]
  gr = pixels[gran]
  bl = pixels[blau]


}
function draw() {
  threshold = sensitivity.value()
  background(0)
  image(video, 0, 0, video_w, video_h)
  r = re
  g = gr
  b = bl
  loadPixels()
  for (i = 0; i < width * height; i++) {
    pixel = i * 4
    red = pixel
    green = pixel + 1
    blue = pixel + 2
    alpha = pixel + 3
    off = 1
    color_diffrence = floor(dist(r, g, b, pixels[red], pixels[green], pixels[blue]))
    if (color_diffrence < threshold) {
      pixels[red] = 0
      pixels[green] = 0
      pixels[blue] = 0
      pixels[alpha] = 0
    }
    

  }
  
  updatePixels()
  // keyPressed();

  if (keyIsDown(LEFT_ARROW))
    sensitivity.value(sensitivity.value()+3)
  console.log(sensitivity.value())

  if (keyIsDown(RIGHT_ARROW))
    sensitivity.value(sensitivity.value()-3)
}

function mouseClicked() {
  getclr(mouseX, mouseY)
}

