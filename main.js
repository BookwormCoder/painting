var mouseEvent="empty";
var radius= document.getElementById("radius");
var width_of_line=document.getElementById("width_of_line");
var color=document.getElementById("color");
var mouseEvent="mousemove";

color="aqua";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("mouseleave", my_mouseleave)

function my_mousedown(e){

    var radius= document.getElementById("radius");
var width_of_line=document.getElementById("width_of_line");
var color=document.getElementById("color");
var mouseEvent="mousedown";
}

function my_mouseup(e){
    var mouseEvent="mouseup";
}

function my_mouseleave(e){
    var mouseEvent="mouseleave";
}

function my_mousemove(e){
    var mouseEvent="mousemove";
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        console.log("current_x", "current_y");
        console.log("x = " + current_x + "y = " + current_y);
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_x, current_y, radius, 0, 2* Math.PI);
        ctx.stroke();

    }
}
