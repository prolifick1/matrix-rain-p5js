var char;
var symbolSize = 60;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  )
  background(0);
  char = new Character(
    width / 2,
    0,
    random(5, 10)
  );
  char.setToRandomSymbol();
  textSize(symbolSize);
}

function draw() {
  background(0);
  char.render();
}


function Character(x, y, speed) {
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;

  this.setToRandomSymbol = function () {
    this.value = String.fromCharCode(
      0x30A0 + round(random(0, 96))
    );
  };

  this.render = function () {
    fill(0, 255, 70);
    text(this.value, this.x, this.y);
    this.rain();
  };

  this.rain = function() {
    this.y += this.speed;
  }

}



