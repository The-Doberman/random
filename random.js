var namespace = "http://www.w3.org/2000/svg"


function createRandomScene(){
    var number = Math.random()

if (number < 0.25){
    createFirstScene()
}else if (number < 0.50){
    createSecondScene()
}else if (number < 0.75){
    createThirdScene()
}
}












// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    document.querySelector("svg").setAttribute("style","background: url('https://i.ytimg.com/vi/RfrG_20kRrM/maxresdefault.jpg')")
    

    
    makeRect(39, 21, 889, 450, "white", 1)

makeRect(39, 21, 889, 25, "gray", 1)

makeCircle(52, 33, 10, "red", 1)

makeCircle(80, 33, 10, "yellow", 1)

makeCircle(108, 33, 10, "lime", 1)

makeRect(200, 180, 150, 150, "green", 1)

makeLine(385, 250, 600, 250, "gray", 20, 1)

makeRect(655, 180, 150, 150, "lightblue", 1)

makeText("install", 109, 76, 25, "sans-serif", 1)

makeText("minecraft", 220, 376, 25, "sans-serif", 1)

makeText("applications", 665, 376, 25, "sans-serif", 1)
}

// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    document.querySelector("svg").setAttribute("style","background: url('https://i.ytimg.com/vi/RfrG_20kRrM/maxresdefault.jpg')")
    
    var number = Math.random()
    
    if (number  > 0.65){
    
    makeRect(39, 19, 889, 450, "white", 1)

makeRect(39, 19, 889, 25, "gray", 1)

makeCircle(52, 31, 10, "red", 1)

makeCircle(80, 31, 10, "yellow", 1)

makeCircle(108, 31, 10, "lime", 1)

makeText("MOJANG", 373, 315, 100, "sans-serif", "balck", 1)

makeImage("https://qph.ec.quoracdn.net/main-qimg-7607deb0a45b46cd9609bb800a58c9d9", 250, 230, 100, 100, 1)

makeText("NOT RESPONDING!", 70, 75, 25, "sans-serif", 1)
}else{
     makeRect(39, 19, 889, 450, "white", 1)

makeRect(39, 19, 889, 25, "gray", 1)

makeCircle(52, 31, 10, "red", 1)

makeCircle(80, 31, 10, "yellow", 1)

makeCircle(108, 31, 10, "lime", 1)

makeText("MOJANG", 373, 315, 100, "sans-serif", "balck", 1)

makeImage("https://qph.ec.quoracdn.net/main-qimg-7607deb0a45b46cd9609bb800a58c9d9", 250, 230, 100, 100, 1)
}
}

// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    document.querySelector("svg").setAttribute("style","background: url('http://highered.social/wp-content/uploads/2016/02/panic_screen.png')")

makeRect(39, 19, 589, 450, "white", 1)

makeRect(39, 19, 589, 25, "gray", 1)

makeCircle(52, 31, 10, "red", 1)

makeCircle(80, 31, 10, "yellow", 1)

makeCircle(108, 31, 10, "lime", 1)

makeImage("https://i.ytimg.com/vi/ASnPBms599Y/maxresdefault.jpg", 200, 200, 300, 300, 1)

makeText("Your Data is corrupt!", 110, 115, 50, "sans-serif", "black", 1)

makeText("please call 1800-my-apple", 196, 165, 25, "sans-serif", "black", 1)

makeText("or visit http://www.apple.com/support/mac", 213, 225, 15, "sans-serif", "black", 1)
}








// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}