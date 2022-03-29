var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "Red";
Width_of_line = 2;
radius = 20;

canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown(e) {
   color = document.getElementById("input_color").value;
   Width_of_line = document.getElementById("input_width_of_line").value;
   radius = document.getElementById("input_radius").value;
   mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var current_mouse_x = e.clientX - canvas.offsetLeft;
    var current_mouse_y = e.clientY - canvas.offsetTop;
    
    if(mouseEvent == "mouseDown") {
        console.log("Current Position Of X And Y Coordinates = ");
        console.log("X = "+current_mouse_x+",Y = "+current_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = Width_of_line;
        ctx.arc(current_mouse_x, current_mouse_y, radius, 0 ,2 * Math.PI);
        ctx.stroke();
    }
}