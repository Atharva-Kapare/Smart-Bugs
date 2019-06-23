let bugs = [];
let size = 10;

function setup() {

    createCanvas(600, 600);
    for (let i = 0; i < size; i++) {
        bugs[i] = new Bug;
    }

}

function draw() {
    background(0);

    //Drawing all Bugs
    for (var i = 0; i < size; i++) {
        bugs[i].show();
        bugs[i].move();

        if (bugs[i].x > 620) {
            bugs[i].x = -20;
        }
        if (bugs[i].y > 620) {
            bugs[i].y = -20;
        }

        //Collision system, still needs more work. 
        if (bugs[i].x > 112.5 || bugs[i] < 487.5) {
            if (bugs[i].y > 285 && bugs[i].y < 315) {
                bugs.splice(i, 1);
                size -= 1;
            }
        }
    }

    //Drawing static obsticle
    rectMode(CENTER);
    rect(300, 300, 375, 30);

    // for (var i = 0; i < size; i++) {
    //     if (bugs[i].x > 112.5 && bugs[i] < 487.5) {
    //         if (bugs[i].y > 285 && bugs[i].y < 315) {
    //             bugs.splice(i, 1);
    //             size--;
    //         }
    //     }
    // }



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
        this.x += Math.random() * 10;
        this.y += Math.random() * 10;
    }
}

function mousePressed() {
    noLoop();
}







