SongA="";
SongB="";
leftWristY="";
leftWristX="";
RightWristY="";
RightWristX="";

function preload(){
    SongA=loadSound("one_song.mp3")
    SongB=loadSound("two_song.mp3")
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
            Lscore=result[0].pose.keypoints[9].score;
            console.log(Lscore);
            SongA.stop();
        }
    }

function draw(){
image(video,0,0,400,350)
SongA.play();
fill("purple")
circle(leftWristX, leftWristY, 50)
};