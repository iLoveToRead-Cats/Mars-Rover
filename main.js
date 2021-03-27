var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
background_image = "mars.jpg";
rover_image = "rover.png";
var images_array = ["nasa_1.jpg", "nasa_2.jpg", "nasa_3.jpg", "nasa_4.jpg"];
random_number = Math.floor(Math.random()*4);
background_image = images_array[random_number];
function add() {
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_image;

    rover_img_tag = new Image();
    rover_img_tag.onload = uploadRover;
    rover_img_tag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_img_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keycode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y>=0) {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadRover();
        console.log("When up arrow is pressed: x = " + rover_x + ", y = " + rover_y);
    }
}

function down() {
    if (rover_y<=500) {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadRover();
        console.log("When down arrow is pressed: x = " + rover_x + ", y = " + rover_y);
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadRover();
        console.log("When left arrow is pressed: x = " + rover_x + ", y = " + rover_y);
    }
}

function right() {
    if (rover_x<=700) {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadRover();
        console.log("When right arrow is pressed: x = " + rover_x + ", y = " + rover_y);
    }
}

