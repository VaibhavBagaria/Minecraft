var canvas = new fabric.Canvas('myCanvas');
blockImageObject = "";

playerX = 10;
playerY = 10;
playerObject = "";
blockImageWidth = 30;
blockImageHeight = 30;

function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerObject = Img;
        playerObject.scaleToWidth(50);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject)
    });
}


function New_Image(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObject)
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight + 10;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        if (blockImageWidth > 10) {
            blockImageWidth = blockImageWidth - 10;
            blockImageHeight = blockImageHeight - 10;
            document.getElementById("current_width").innerHTML = blockImageWidth;
            document.getElementById("current_height").innerHTML = blockImageHeight;
        }
    }

    if (keyPressed == '38') {
        Up();
        console.log("Up")
    }
    if (keyPressed == '40') {
        Down();
        console.log("down")
    }
    if (keyPressed == '37') {
        Left();
        console.log("Left")
    }
    if (keyPressed == '39') {
        Right();
        console.log("Right")
    }
    if (keyPressed == '87') {
        New_Image('wall.jpg')
        console.log("w")
    }
    if (keyPressed == '71') {
        New_Image('ground.png')
        console.log("g")
    }
    if (keyPressed == '76') {
        New_Image('light_green.png')
        console.log("l")
    }
    if (keyPressed == '84') {
        New_Image('trunk.jpg')
        console.log("t")
    }
    if (keyPressed == '82') {
        New_Image('roof.jpg')
        console.log("r")
    }
    if (keyPressed == '89') {
        New_Image('yellow_wall.png')
        console.log("y")
    }
    if (keyPressed == '68') {
        New_Image('dark_green.png')
        console.log("d")
    }
    if (keyPressed == '85') {
        New_Image('unique.png')
        console.log("u")
    }
    if (keyPressed == '67') {
        New_Image('cloud.jpg')
        console.log("c")
    }
    if (keyPressed == '83') {
        New_Image('Enchanted_Diamond_Sword.gif')
        console.log("S")
    }
    if (keyPressed == '78') {
        New_Image('TNT.png')
        console.log("Tnt")
    }
    if (keyPressed == '65') {
        New_Image('Craft Table.png')
        console.log("A")
    }
    if (keyPressed == '79') {
        New_Image('Cow.png')
        console.log("O")
    }
    if (keyPressed == '73') {
        New_Image('Chicken.png')
        console.log("O")
    }
    if (keyPressed == '88') {
        New_Image('Pig.jpg')
        console.log("P")
    }
    if (keyPressed == '90') {
        New_Image('Zombie.png')
        console.log("Z")
    }
    if (keyPressed == '66') {
        New_Image('Bush.jpg')
        console.log("B")
    }
    if (keyPressed == '79') {
        New_Image('Water.jpg')
        console.log("O")
    }
    if (keyPressed == '70') {
        New_Image('Flower.png')
        console.log("F")
    }
}

function Up() {
    if (playerY>0) {
        playerY=playerY-10
        console.log('up')
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function Down() {
    if (playerY<580) {
        playerY=playerY+10
        console.log('down')
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function Right() {
    if (playerX<780) {
        playerX=playerX+10
        console.log('right')
        canvas.remove(playerObject)
        playerUpdate()
    }
}
function Left() {
    if (playerX>0) {
        playerX=playerX-10
        console.log('left')
        canvas.remove(playerObject)
        playerUpdate()
    }
}
