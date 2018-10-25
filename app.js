var elem = document.getElementById("event");

var images = [
    "foto/summer.jpg","foto/sun.jpg","foto/coala.jpg","foto/church.jpg"
];
var num = 0;
function next(){
    var slider = document.getElementsById("slider");
    num++;
    if(num>images.length){
        num = 0;
    }
    slider.src = images[num];
}
function prev(){
    num--;
    if(num<0){
        num = images.length -1;
    }
    slider.src=images[num];
}
 var a = document.getElementById("event");
 a.innerHTML=""

