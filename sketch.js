var char;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  )
  background(0);
  char = new Character(
    width / 2,
    height / 2
  );
  char.setToRandomSymbol();
}

function draw() {
  char.render();
}


function Character(x, y) {
  this.x = x;
  this.y = y;
  this.value;

  this.setToRandomSymbol = function () {
    this.value = String.fromCharCode(
      0x30A0 + round(random(0, 96))
    );
  };

  this.render = function () {
    fill(0, 255, 70);
    text(this.value, this.x, this.y);

  };

}



