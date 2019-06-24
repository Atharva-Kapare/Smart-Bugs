let bugs = [];
let size = 100; //the size of the population for each generation
let currentPopulation = size; //amount of bugs alive at any given time
let speed = 5; //the speed at which the bugs can move

//start x and y initialise the start point of all the bugs
//end x and y initialise the goal of the bugs
let startX = 300;
let startY = 450;
let endX = 300;
let endY = 150;

//steps is the lifespan of all the bugs, this determines the amount of "steps" they can take before they dissappear
let steps = 1000;

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
            break;
        }
        else if (bugs[i].y > 600 || bugs[i].y < 0) {
            bugs.splice(i, 1);
            currentPopulation -= 1;
            break;
        }

        //Collision system 
        hit = collideRectCircle(112, 285, 374, 30, bugs[i].x, bugs[i].y, 5);
        if (hit) {
            bugs.splice(i, 1);
            currentPopulation -= 1;
            break;
        }
    }

    //Drawing static obsticle
    rect(112, 285, 374, 30);
    console.log(bugs.length);


}

class Bug {
    constructor() {
        this.x = startX;
        this.y = startY;
        this.counter = 0;
        this.dna = [];
        //initialising the DNA with random steps
        for(var i = 0; i < steps; i++){
            this.dna[i] = (Math.random() * 2) - 1;
        }

        // this.x = Math.floor(Math.random() * 600);
        // this.y = Math.floor(Math.random() * 600);
    }

    show() {
        ellipse(this.x, this.y, 10, 10);
        fill(255, 255, 255);
    }

    move() {
        
        if(this.counter % 2 == 0){
            this.x += this.dna[this.counter]*speed;
        }
        else if(this.counter % 2 == 1){
            this.y += this.dna[this.counter]*speed;
        }
        this.counter++;

        // this.x += ((Math.random() * 2) - 1) * speed;
        // this.y += ((Math.random() * 2) - 1) * speed;
    }
}

function mousePressed() {
    noLoop();
}







