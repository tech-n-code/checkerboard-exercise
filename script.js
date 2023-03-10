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

setTimeout(function() {
    window.location.reload();
}, 2000);

let audio = document.createElement("audio");
audio.controls = "true";
audio.autoplay = "true";
audio.muted = "true";
audio.src = "https://freepd.com/music/Backbeat.mp3";
grid.appendChild(audio);
// console.log(audio);

// function getRandomHexColor() {
//     let hex = Math.floor(Math.random() * 16777215).toString(16);  //radix 16; 16777215 for 24-bit color
//     // console.log(hex);
//     output = "#" + "0".repeat(6 - hex.length) + hex;  // #xxxxxx format
//     return output;
// }

/*

### Flashing Colors

On a new branch called `flashing`, write code to change each tile's color to a new random color every 2 seconds. 

### Bonus: Audio

Get some audio playing to accompany your trippy visuals, using only JS.  No editing the HTML!

*/