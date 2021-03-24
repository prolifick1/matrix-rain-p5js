var charSize = 20;
var streams = [];

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  )
  background(0, 50);
  var x = 0;
  for (var i = 0; i <= width / charSize; i++) {
    stream = new Stream();
    stream.generateChars(x, random(innerHeight, 0));
    streams.push(stream);
    x += charSize;
  }
  textSize(charSize);
}

function draw() {
  background(0);
  streams.forEach(function (stream) {
    stream.render();
  });
}


function Character(x, y, speed, first) {
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;
  this.switchInterval = round(random(2, 20));
  this.first = first;

  this.setToRandomChar = function () {
    if (frameCount % this.switchInterval === 0) {
      this.value = String.fromCharCode(
        0x4E00 + round(random(0, 96))
      );
    }

  };

  this.rain = function () {
    if (this.y >= height) {
      this.y = 0;
    } else {
      this.y += this.speed;
    }
    this.y += this.speed;
  }
}

function Stream() {
  this.chars = [];
  this.totalChars = round(random(5, 20));
  this.speed = random(1, 5);
  this.generateChars = function (x, y) {
    var first = true;
    for (var i = 0; i <= this.totalChars; i++) {
      char = new Character(x, y, this.speed, first);
      char.setToRandomChar();
      this.chars.push(char);
      y -= charSize;
      first = false;
    };
  }
  this.render = function () {
    this.chars.forEach(function (char) {
      if (char.first) {
        fill(255, 255, 180)
      } else {
        fill(0, 255, 70)
      }
      text(char.value, char.x, char.y);
      char.rain();
      char.setToRandomChar();
    })
  }
}