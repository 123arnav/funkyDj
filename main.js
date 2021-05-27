SongA="";
SongB="";
LeftWristY="";
LeftWristX="";
RightWristY="";
RightWristX="";

function preload(){
    SongA=loadSound("one_song.mp3")
    SongB=loadSound("one_song.mp3")
}

function setup(){
    canvas=createCanvas(400,350);
    canvas.position(430,230);
video=createCapture(VIDEO)
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
console.log(ml5.version);
posenet.on("pose", getposes);
};
function modelLoaded(){
    console.log("loaded")
    };

    function getposes(result){
        if(result.length>0){
            console.log(result);
            leftWristY=result[0].pose.leftWrist.y;
            leftWristX=result[0].pose.leftWrist.x;
            console.log(leftWristY);
            console.log(leftWristX);
            rightWristY=result[0].pose.rightWrist.y;
            rightWristX=result[0].pose.rightWrist.x;
            console.log(rightWristY);
            console.log(rightWristX);
        }
    }

function draw(){
image(video,0,0,400,350)
};