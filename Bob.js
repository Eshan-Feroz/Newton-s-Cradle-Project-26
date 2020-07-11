class Bob{
    constructor(x, y, radius){
        
        // Properties for bob
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5
            
        }
        
        // Create the body
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options);

        World.add(world, this.body); 
        
    }
    
    display(){

        // Generate the position of the bob
        var bobPos = this.body.position;
        
        push()
        //translate(this.x, this.y);
        rectMode(CENTER);
        strokeWeight(3);
        // Add color and finalize with the ellipse        
        fill("yellow");
        ellipse(this.x,this.y,this.radius, this.radius);
		pop()
        
    }
          
}
