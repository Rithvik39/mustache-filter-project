noseX = 0;
noseY = 0;

function preload(){
    mustache_filter = loadImage("https://i.postimg.cc/y88fNNdC/236408aae759daf44b74a6ed748389df.png");

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
    image(mustache_filter , noseX , noseY , 40 , 40);
}
function take_snapshot(){
    save("my_filter_project.png");
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);

        noseX = result[0].pose.nose.x - 152;
        noseY = result[0].pose.nose.y - 45;

        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
