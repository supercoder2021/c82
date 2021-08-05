canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouse_event="empty";
color="red";
radius=10;
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouse_event="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x =e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y =e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        console.log("current position of x and y coordinates =");
        console.log(" x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0, 2* Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}
function cleararea(){
    ctx.clearcircle(0,0,ctx.canvas.width,ctx.canvas.height);
}