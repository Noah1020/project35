class Player {
    constructor(x,y){
        var option = {
            restitution : 0.8,
            density : 1.0,
            friction : 1.0
        }


        this.Body = Bodies.rectangle(x,y,55,70);
        World.add(world,this.Body);
        this.width = 55;
        this.height = 70;
        this.image = loadImage("snowman.png");

    }

    display(){
        
        var pos = this.Body.position;
        var angle = this.Body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();



        
    }









}