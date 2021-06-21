noseX = 0;
noseY = 0;

function preload(){

}

function setup(){
    canvas = createCanvas(400 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized !!!");
}

function draw(){
    image(video , 0 , 0, 400 , 400);
}
function take_snapshot(){
    save("my_filter_project.png");
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);

        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
    }
}