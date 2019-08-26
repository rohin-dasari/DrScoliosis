

function setup_canvas(width,height){
    var canvas = document.createElement('canvas');
    canvas.id = "CursorLayer";
    canvas.width = width;
    canvas.height = height;
    canvas.style.zIndex = 8;
    canvas.style.position = "absolute";
    canvas.style.border = "1px solid";
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid blue";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    return canvas;
}

canvas = setup_canvas(500,500)



cursorLayer = document.getElementById("CursorLayer");

var ctx = canvas.getContext("2d");
function draw_background(ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let random = Math.floor(Math.random() * 100);
    console.log(random)
    ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
    ctx.fillRect(300, 0, 200, 250);
    ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
    ctx.fillRect(15, 150, 200, 200);
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0 , 0, 300, 150);
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0 , 0, 15, 350);
}
var draw = setInterval(draw_background(ctx),10);




