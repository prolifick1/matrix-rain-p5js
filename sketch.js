var charSize = 20;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  )
  background(0);
  stream = new Stream();
  stream.generateChars();
  textSize(charSize);
}

function draw() {
  background(0);
  stream.render();
}


function Character(x, y, speed) {
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;
  this.switchInterval = round(random(2, 20));

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
  this.totalChars = round(random(5, 30));
  this.speed = random(1, 5);
  this.generateChars = function () {
    var y = 0;
    var x = width / 2;
    for (var i = 0; i <= this.totalChars; i++) {
      char = new Character(x, y, this.speed);
      char.setToRandomChar();
      this.chars.push(char);
      y -= charSize;
    };
  }
  this.render = function () {
    this.chars.forEach(function (char) {
      fill(0, 255, 70);
      text(char.value, char.x, char.y);
      char.rain();
      char.setToRandomChar();
    })
  }
}