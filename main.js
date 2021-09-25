function preload(){
 nose = loadImage("https://i.postimg.cc/tTJPrvhy/clownnose.png");
}
noseX = 0;
noseY = 0;
function setup(){
 Canvas = createCanvas(300 , 300);
 Canvas.center();
 video = createCapture(VIDEO);
 video.size(300,300);
 video.hide();

 PoseNet = ml5.poseNet(video , loaded);
 PoseNet.on('pose' , gotresults);
 

}

function loaded(){
    console.log("PoseNet is loaded");
}

function gotresults(hello){
    if(hello.length > 0){
        
        console.log(hello);
        console.log("Nose X = " + hello[0].pose.nose.x); 
        console.log("Nose Y = " + hello[0].pose.nose.y);   
        noseX = hello[0].pose.nose.x-15;
        noseY = hello[0].pose.nose.y-15;

    }
}

function draw(){
 image(video , 0,0,300,300);

 /*circle(noseX , noseY, 28);
 fill(255,0,0);
 stroke(0,0,0);*/
 
 image(nose, noseX , noseY, 35,35);

}

function Pic(){
    
    save('Filtered Image.png')
}