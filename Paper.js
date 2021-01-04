class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.2,
            friction:0.3,
            density:1.0
        }   

        this.image=loadImage("sprites/paper(1).png")
        
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);  
    }
    display(){
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
}