let bugs = [];
let size = 100; //the size of the population for each generation
let currentPopulation = size; //amount of bugs alive at any given time
let speed = 5; //the speed at which the bugs can move
let startX = 300;
let startY = 450;
let endX = 300;
let endY = 150;

function setup() {

    createCanvas(600, 600);
    for (let i = 0; i < size; i++) {
        bugs[i] = new Bug;
    }
    var hit = false;

}

function draw() {
    background(0);

    fill(0, 255, 0);
    ellipse(startX, startY, 5, 5); //create the starting point

    fill(255, 0, 0);
    ellipse(endX, endY, 5, 5); //create the ending point

    fill(0, 0, 0);


    //Drawing all Bugs

    for (var i = 0; i < currentPopulation; i++) {
        bugs[i].show();
        bugs[i].move();

        if (bugs[i].x > 600 || bugs[i].x < 0) {
            bugs.splice(i, 1);
            currentPopulation -= 1;
        }
        if (bugs[i].y > 600 || bugs[i].y < 0) {
            bugs.splice(i, 1);
            currentPopulation -= 1;
        }

        //Collision system 
        hit = collideRectCircle(112, 285, 374, 30, bugs[i].x, bugs[i].y, 5);
        if (hit) {
            bugs.splice(i, 1);
            currentPopulation -= 1;
        }
    }

    //Drawing static obsticle
    rect(112, 285, 374, 30);



}

class Bug {
    constructor() {
        this.x = startX;
        this.y = startY;

        // this.x = Math.floor(Math.random() * 600);
        // this.y = Math.floor(Math.random() * 600);
    }

    show() {
        ellipse(this.x, this.y, 10, 10);
        fill(255, 255, 255);
    }

    move() {
        this.x += ((Math.random() * 2) - 1) * speed;
        this.y += ((Math.random() * 2) - 1) * speed;
    }
}

function mousePressed() {
    noLoop();
}







