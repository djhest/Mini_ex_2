var button;
var sliders = [];
var song;
var fft;
var gif;
var dancer;
var boxes = [];
var boks;
var kage;
var cols = 40;
var rows = 30;

function toggleSong() { // A function to toggle whether the song and video is playing.
  if (song.isPlaying()) {
    song.pause();
    gif.pause();
  } else {
    song.play();
    gif.loop();
  }
}

function preload() {
  song = loadSound('assets/Kids.mp3');
  gif = createVideo('gif/james.mov');
}

function setup() {
  createCanvas(700,500)

  gif.position(200,200);
  button = createButton('toggle'); //The toggle button
  button.mousePressed(toggleSong); //What happens when the button is pressed
  button.position(100,100);
  song.play();
  gif.loop();

  fft = new p5.FFT(0.9,128); //A p5 function that analyze an audio file and delivers values that can be used.
  translate(-290,0);
  for (var i = 0; i < 140; i += 20) { //For loop that creates 7 sliders. They're 200px wide and rotated 90 degrees so that they are vertical
    sliders[i] = createSlider(0,300,0);
    sliders[i].position(i-50,300);
    sliders[i].style('width','200px');
    sliders[i].style('rotate','-90');
  }
}




function draw() {

  for (var i = 0; i < 140; i += 20) { //This for loop creates the value for the sliders. And the red yellow and green colors also
    var analyze = fft.analyze();
    var amp = analyze[i];
    var r = map(amp, 0, 256, 0, 300);
    sliders[i].value(r);
    var red = 0;
    var green = 0;
    var blue = 0;
    if(r <= 150) { //If statements that decide whether the sliders are red yellow or green.
      red = 0;
      green = 200;
      blue = 0;
    } else if (r > 150 && r <= 225){
      red = 203;
      green = 201;
      blue = 5;
    } else if (r > 225) {
      red = 255;
      green = 0;
      blue = 0;
    }
    var col = color(red,green,blue);
    sliders[i].style("background-color",col);

  }
}
