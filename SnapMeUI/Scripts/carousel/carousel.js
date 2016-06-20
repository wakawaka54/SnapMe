
var xPos = 0;

function scroll() {
    xPos -= 10;
    var imgs = $(".carousel-img");
    imgs.css("transform", "translateX(" + xPos + "px)");

    if(xPos <= -screen.width)
    {
        xPos = 0;
    }
}

function righthover() {

}

function lefthover() {

}

function main()
{

}

$(document).ready(main);