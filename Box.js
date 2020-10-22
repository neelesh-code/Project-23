class Box{

    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width, height, {isStatic:true});
        this.width=width;
        this.height=height;
        World.add(World, this.body);
    }

    display(){

        var pos=this.body.position
       
        push();
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y, this.width, this.height);
        pop();

    }



}