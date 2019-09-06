

function setup_canvas(){
    var canvas = document.createElement('canvas');
    canvas.id = "GameLayer";
    canvas.width = 1000
    canvas.height = 600
    console.log(canvas.width,canvas.height)
    canvas.style.zIndex = 8;
    canvas.style.position = "absolute";
    canvas.style.border = "1px solid";
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid blue";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    return canvas;
}

canvas = setup_canvas()


// function to draw controller square
// function draw_controller_unit(letter,activation,position,width,height){
//     ctx.beginPath();
//     ctx.lineWidth = "1";
//     ctx.strokeStyle = "green";
//     ctx.rect(position, window.innerHeight-250, 75, 75);
//     ctx.stroke();
//     ctx.fillRect(position,window.innerHeight-250,75,75);
// }



var ctx = canvas.getContext("2d");


function draw_background(){

    // draw background
} 


// function to calculate the 
function draw_keys(){
    ctx.strokeStyle = "red";
    position = 100;
    ctx.font = "30px Arial";
    letters = ['a','s','d','f','g','h','j','k','l']; 
    ctx.beginPath();
    
    ctx.moveTo(0, 224.6);
    ctx.lineTo(canvas.width, canvas.height/3);
    ctx.stroke();
    for(i=0; i<letters.length; i++){
        ctx.beginPath();
        ctx.fillStyle = "rgba(100, 50, 100, 0.2)";
        ctx.lineWidth = "1";
        ctx.strokeStyle = "green";
        ctx.rect(position, canvas.height-250, 50, 50);
        ctx.stroke();
        ctx.fillRect(position,canvas.height-250,50,50);
        ctx.fillStyle = "red";
        ctx.fillText(letters[i], position+20, canvas.height-215);
        position += 75;
    }
}


class Graph {
    constructor(music){
        // music variable contains instructions on key presses and their associated timings
        this.music = music;
        this.position = 100;
        this.position_gap=75;
        console.log(music)
    }
    // takes the 
    renderer(){

    }
    // run method will render rhythm blocks on the screen and move them gradually at a defined speed 
    run(){
        for (var key in p) {
            if (p.hasOwnProperty(key)) {
                console.log(key + " -> " + p[key]);
                p[key]
            }
        }
    }

}
sample = {
    0: [['a',2],['s',1]],
    1: [['d',1],['s',1]],
    2: [['g',1]]
}


const thing = new Graph(sample)
var timer = 0;
var init_height = 215;
var boxWidth = 50;
var boxHeight = 50;
function draw(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    // render keys on screen
   draw_keys();
   
    timer = timer + 10;
    if (timer > 10 && timer < 50000){
        ctx.lineWidth = "1";
        ctx.strokeStyle = "red";
        ctx.fillRect(100,init_height,50,50);
        init_height += 1;
    }

    // console.log(timer);
    // let random = Math.floor(Math.random() * 100);
    // let random_alpha = Math.random()*0.5
    // ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
    // ctx.fillRect(300, 0, 200, 250);
    // ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
    // ctx.fillRect(15, 150, 200, 200);
    // ctx.fillStyle = "rgba(0, "+random+", 0,0.3)";
    // ctx.fillRect(0 , 0, 300, 150);
    // ctx.fillStyle = "rgba(0, 0, 0, 1)";
    // ctx.fillRect(0 , 0, 15, 350);
}

var draw = setInterval(draw,10);




