let bugs = [];
let size = 500; //the size of the population for each generation
let currentPopulation = size; //amount of bugs alive at any given time
let speed = 10; //the speed at which the bugs can move
let counter = 0; //an integer to keep count of the steps

//start x and y initialise the start point of all the bugs
//end x and y initialise the goal of the bugs
let startX = 300;
let startY = 500;
let endX = 300;
let endY = 150;

//dnaLength is the lifespan of all the bugs, this determines the amount of "steps" they can take before they dissappear
let dnaLength = 1000;

//this is the variable which indicates which generation of bugs we are in
let generation = 1;
let newGen = false;

//the closest a bug has gotten to the goal in each generation and it's index in the bugs[] array
let shortestDistance = 10000;
let fittest = 1;
let fittestBug = [];

//the percent chance that the dna can get changed
let mutationChance = 0.2;
let mutationRate = 0.2;



function setup() {

    createCanvas(600, 600);
    for (let i = 0; i <= size; i++) {
        bugs[i] = new Bug;
    }
    var hit = false;
    //frameRate(9999999);

}

function draw() {
    background(0);

    fill(0, 255, 0);
    ellipse(startX, startY, 5, 5); //create the starting point

    fill(255, 0, 0);
    ellipse(endX, endY, 5, 5); //create the ending point

    fill(0, 0, 0);


    if (generation > 1) {
        if (newGen) {

            bugs.splice(0, size);

            for (let i = 0; i <= size; i++) {
                bugs[i] = new Bug;
            }
            newGen = false;
            counter = 0;
            currentPopulation = size;
            shortestDistance = 1000000;
        }
    }


    //Drawing all Bugs

    for (var i = 0; i < bugs.length; i++) {
        bugs[i].show();
        if (bugs[i].dead == false) {
            bugs[i].move();
            bugs[i].goalDistance = dist(bugs[i].x, bugs[i].y, endX, endY);
            if (bugs[i].goalDistance < bugs[i].minGoalDistance) {
                bugs[i].minGoalDistance = bugs[i].goalDistance
            }
        }





        if (bugs[i].dead == false) {
            if (bugs[i].x > 600 || bugs[i].x < 0) {
                //bugs.splice(i, 1);
                bugs[i].alive = false;
                bugs[i].dead = true;
                currentPopulation -= 1;
                break;
            }
            else if (bugs[i].y > 600 || bugs[i].y < 0) {
                //bugs.splice(i, 1);
                bugs[i].alive = false;
                bugs[i].dead = true;
                currentPopulation -= 1;
                break;
            }
        }

        //Collision system 
        hit = collideRectCircle(112, 285, 250, 30, bugs[i].x, bugs[i].y, 5);
        if (hit && bugs[i].alive == true) {
            //bugs.splice(i, 1);
            bugs[i].alive = false;
            bugs[i].dead = true;
            currentPopulation -= 1;
            break;
        }
    }



    //Drawing static obsticle
    rect(112, 285, 250, 30);
    //rect(112,285,250,30)
    //console.log(currentPopulation);

    //incrementing the generations if the bugs run out of dna
    counter++
    if (counter == dnaLength) {
        for (var i = 0; i < size; i++) {
            if (bugs[i].alive == true) {
                if (bugs[i].minGoalDistance < shortestDistance) {
                    shortestDistance = bugs[i].minGoalDistance;
                    fittest = i;
                }
            }
        }

        fittestBug = bugs[fittest].dna;

        // console.log(shortestDistance);
        // console.log(fittestBug);
        newGen = true;
        generation++;
    }


}

class Bug {
    constructor() {
        this.x = startX;
        this.y = startY;
        this.counter = 0;
        this.dna = [];
        this.alive = true;
        this.dead = false;
        this.goalDistance = 0.0;
        this.minGoalDistance = 999999;

        if (generation > 1) {
            for(var i = 0; i < dnaLength; i++){
                if (Math.random() <= mutationChance) {
                    this.dna[i] = Math.random()*fittestBug[i]*mutationRate;//(Math.random() * 2) - 1;
                }
                else {
                    this.dna[i] = fittestBug[i];
                }
            }
            
        }
        else {
            //initialising the DNA with random dnaLength    
            for (var i = 0; i < dnaLength; i++) {
                this.dna[i] = (Math.random() * 2) - 1;
            }
        }

        // this.x = Math.floor(Math.random() * 600);
        // this.y = Math.floor(Math.random() * 600);
    }

    show() {
        ellipse(this.x, this.y, 10, 10);
        fill(255, 255, 255);
    }

    move() {
        if (this.dead == false) {
            if (this.counter % 2 == 0 && this.counter <= dnaLength) {
                this.x += this.dna[this.counter] * speed;
            }
            else if (this.counter % 2 == 1 && this.counter <= dnaLength) {
                this.y += this.dna[this.counter] * speed;
            }
            else {
                this.x = this.x;
                this.y = this.y;
            }
            this.counter++;

            if (this.counter == dnaLength) {
                this.dead = true;
            }

        }
        else {
            this.x = this.x;
            this.y = this.y;
        }

        // this.x += ((Math.random() * 2) - 1) * speed;
        // this.y += ((Math.random() * 2) - 1) * speed;
    }
}

function mousePressed() {
    noLoop();
}







