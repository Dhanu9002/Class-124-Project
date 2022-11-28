
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log(nose_x,nose_y);
        rightwrist_x = results[0].pose.rightWrist.x;
        leftwrist_x = results[0].pose.leftWrist.x;
        difference = floor(leftwrist_x - rightwrist_x);
    }
}