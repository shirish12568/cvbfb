noseX=0;
noseY=0;
difference=0;
rightX=0;
leftX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550, 550);
    canvas=createCanvas(550, 550);
    canvas.position(560, 120);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function gotposes(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X= "+noseX);
        console.log("Nose Y= "+noseY);
        rightX=results[0].pose.rightWrist.x;
        leftX=results[0].pose.leftWrist.x;
        difference=floor(leftX - rightX);
        console.log("Right Wrist X= "+rightX);
        console.log("Left Wrist X= "+leftX);
        console.log("Difference= "+difference);
    }
}

function modelLoaded() {
    console.log("PoseNet is Loaded!");
}

function draw() {
    background('purple');

    fill("cyan");
    textSize(difference);
    text("Keyur",noseX, noseY);
    document.getElementById("font_changing").innerHTML="Width and Height of Name is= "+difference+"px";
}