SongA="";
SongB="";

function preload(){
    SongA=loadSound("one_song.mp3")
    SongB=loadSound("one_song.mp3")
}

function setup(){
    canvas=createCanvas(400,350);
    canvas.position(430,230);
video=createCapture(VIDEO)
video.hide();
};
function draw(){
image(video,0,0,400,350)
};