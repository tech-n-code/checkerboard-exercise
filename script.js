let div = document.createElement("div");
div.id = "grid";
document.body.appendChild(div);

let grid = document.getElementById("grid");

let gridHoriz = 9;
let gridVert = 7;

let baseColor = getRandomRGBColor();
let salt = 5

for (let i = 0; i < gridHoriz * gridVert; i++) {
    let tile = document.createElement("div");
    tile.style.width = "11.1%";
    tile.style.paddingBottom = "11.1%";
    tile.style.float = "left";

    if (i % 2 === 0) {
        tile.style.backgroundColor = `rgb(${baseColor[0] + i}, ${baseColor[1]+ i}, ${baseColor[2]+ i})`
    } else if (i % 2 !== 0)
    tile.style.backgroundColor = `rgb(${baseColor[0] + (i * salt)}, ${baseColor[1]+ (i * salt)}, ${baseColor[2]+ (i * salt)})`

    grid.appendChild(tile);
}

function getRandomRGBColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    // return `rgb(${red}, ${green}, ${blue})`;
    return [red, green, blue];
}

// function getRandomHexColor() {
//     let hex = Math.floor(Math.random() * 16777215).toString(16);  //radix 16; 16777215 for 24-bit color
//     // console.log(hex);
//     output = "#" + "0".repeat(6 - hex.length) + hex;  // #xxxxxx format
//     return output;
// }

/*

### Gradient

On a new branch called `gradient`, write code to color the tiles using some sort of gradient.  It does not need to look exactly like the image below, but it should have some sort of increasing/decreasing color values.

![Screen Shot 2015-05-12 at 10.17.24 PM.png](https://draftin.com:443/images/29114?token=rfd8xRPfnvVY9rkIhhzxIl8b3vWWgz6_sprT3mzf2K2uvZ39L9w6pHD4JlE8BxU6vmkDCTmxzm0kw7m2gbSNhBw) 

*/