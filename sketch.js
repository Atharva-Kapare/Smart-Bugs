let bugs = [];
let size = 10; //the size of the population for each generation
let currentPopulation = size; //amount of bugs alive at any given time
let speed = 5; //the speed at which the bugs can move


function setup() {

    createCanvas(600, 600);
    for (let i = 0; i < size; i++) {
        bugs[i] = new Bug;
    }
    var hit = false;

}

function draw() {
    background(0);

    //Drawing all Bugs

    for (var i = 0; i < currentPopulation; i++) {
        bugs[i].show();
        bugs[i].move();

        if (bugs[i].x > 620) {
            bugs[i].x = -20;
        }
        if (bugs[i].y > 620) {
            bugs[i].y = -20;
        }

        hit = collideRectCircle(112, 285, 374, 30, bugs[i].x, bugs[i].y, 10)

        //Collision system, still needs more work. 
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
        this.x = Math.floor(Math.random() * 600);
        this.y = Math.floor(Math.random() * 600);
    }

    show() {
        ellipse(this.x, this.y, 10, 10);
        noFill;
    }

    move() {
        this.x += ((Math.random() * 2) -1) * speed;
        this.y += ((Math.random() * 2) -1) * speed;
    }
}

function mousePressed() {
    noLoop();
}







