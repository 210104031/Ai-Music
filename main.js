function setup() {
    canvas = createCanvas(800,490);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0,0,800,500);
}