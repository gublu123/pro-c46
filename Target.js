class Target
{
    constructor(x, y, radius)
    {
        var options={
            isStatic:true,
        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.image = loadImage("arrow board 1.png");
        this.radius = radius;
    }

    display()
    {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}