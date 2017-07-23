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
var x
var y
function setup() {
  createCanvas(400, 400)
  video = createCapture(VIDEO)
  video.size(400, 400)
}
function getclr(xp, yp) {
  x = floor(constrain(xp, 0, width))
  y = floor(constrain(yp, 0, height))
  px = (x + y * width) * 4
  rad = px
  gran = rad + 1
  blau = gran + 1
  alpi = blau + 1
  re = pixels[rad]
  gr = pixels[gran]
  bl = pixels[blau]
  al = pixels[alpi]  // console.log(re);
  // console.log(gr);
  // console.log(bl);
}
function draw() {
  background(255)
  image(video, 0, 0, 400, 400)  // xpx=floor(constrain(mouseX,0,width))
  // ypx=floor(constrain(mouseY,0,height))
  // px=(xpx+ypx*width)*4
  // r=pixels[px]
  // g=pixels[px+1]
  // b=pixels[px+2]
  // a=pixels[px+3]
  // console.log(r);
  // console.log(ypx);
  // getclr()
  r = re
  g = gr
  b = bl
  loadPixels()
  for (i = 0; i < width * height; i++)  // { found=false
  pixel = i * 4
  red = pixel + 1
  green = pixel + 1
  blue = pixel + 2
  alpha = pixel + 3
  off = 1
  simm = dist(r, g, b, pixels[red], pixels[green], pixels[blue])  //  console.log(simm);
  // if(simm<10)
  // pixels[alpha]=255
  //wall blue 66,119,133
  //
  // yellow 	193, 188, 115
  // if(pixels[red]>r-off && pixels[red]<r+off)
  // {found=true}else{found=false}
  // pixels[red]=0
  // pixels[alpha]=255
  // if(pixels[green]>g-off && pixels[green]<g+off)
  // {found=true}else{found=false}
  // pixels[green]=0
  // pixels[alpha]=0
  // if(pixels[blue]>b-off && pixels[blue]<b+off)
  // {found=true}else{found=false}
  // pixels[blue]=0
  // pixels[alpha]=0
  // if(pixels[alpha]<20)
  // pixels[alpha]=255
  // if(found=true)
  // pixels[alpha]=255
  // if(pixels[red]>r-off && pixels[red]<r+off){
  //   if(pixels[green]>g-off && pixels[green]<g+off){
  //     if(pixels[blue]>b-off && pixels[blue]<b+off){
  //       pixels[alpha]=255
  //     }
  //   }
  // }
  updatePixels()
}
}// }
//

function mouseClicked() {
getclr(mouseX, mouseY)// console.log("afdda"+mouseX+":"+mouseY);
}// setpix()

/*
Exception: SyntaxError: expected expression, got '}'
@Scratchpad/1:86
*/