
function setup(){

    createCanvas(600, 600);
    
    let population = 10;
    let i = 0;
    for(i; i < population; i++){
        bug = new Bug;
    }

}

function draw(){
    background(0);
    
    //ellipse(300, 300, 50, 50);
    //noFill;
    bug.show();
    

}

class Bug{
    constructor(){
        this.x = Math.floor(Math.random()*300);
        this.y = Math.floor(Math.random()*300);        
    }

    show(){
        ellipse(this.x , this.y, 50,50);
        noFill;
    }

    move(){

    }
}


