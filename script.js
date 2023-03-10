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
    if (i % 2 === 0) {
        tile.style.backgroundColor = "black";
    } else if (i % 2 !== 0)
        tile.style.backgroundColor = "red";
    grid.appendChild(tile);
}

/*

9 tiles horiz by 7 tiles vertical
top-left tile black

![Screen Shot 2015-05-12 at 9.28.07 PM.png](https://draftin.com:443/images/29112?token=H321vjS2Gw41xPTjzAyQEaanRGjm6cAAskSoQgbnGA3El3ojEIP8BRWE8sjyUGBBkd7o1MKNRCpIzYc32qvwsyQ)

**Hints**

* Each tile should be a `div`
* Each tile's width is `11.1%`
* Set each tile's `float` property to `left`
* Each tile's paddingBottom is `11.1%`

*/