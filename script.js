let div = document.createElement("div");
div.id = "grid";
document.body.appendChild(div);

let grid = document.getElementById("grid");

let gridHoriz = 9;
let gridVert = 7;

for (let i = 0; i < gridHoriz * gridVert; i++) {
    let tile = document.createElement("div");
    tile.style.width = "11.1%";
    tile.style.paddingBottom = "11.1%";
    tile.style.float = "left";
    tile.style.backgroundColor = getRandomHexColor()
    // if (i % 2 === 0) {
    //     tile.style.backgroundColor = "black";
    // } else if (i % 2 !== 0)
    //     tile.style.backgroundColor = "red";
    grid.appendChild(tile);
}

function getRandomHexColor() {
    let hex = Math.floor(Math.random() * 16777215).toString(16);  //radix 16; 16777215 for 24-bit color
    // console.log(hex);
    output = "#" + "0".repeat(6 - hex.length) + hex;  // #xxxxxx format
    return output;
}

/*

### Random Colors

On a new branch called `randomcolors`, implement the following changes:

1. Instead of being either red or black, each tile should be a random color.  How do you generate random colors?  You can use RGB or Hexadecimal as your color system.

![Screen Shot 2015-05-12 at 10.19.59 PM.png](https://draftin.com:443/images/29115?token=g0Da9o1sdpfxhhNjHJVQ2578h9pJatEhrE_4ysca-j-FXB3EX58CGJmXZT0087rlBo22A_MgqflTfIxhMsUfuV8) 

*/