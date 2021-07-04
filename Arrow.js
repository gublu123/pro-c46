class Arrow
{
    constructor(x, y)
    {
       // var options={
        //    density: 1,
        //    restitution:0.01
        //}
        this.body = Bodies.rectangle(x, y, 3,50);
        World.add(world, this.body);
        this.image = loadImage("arrow.png");
        this.width=3;
        this.height=50;
    }

    display()
    {
        fill("white");
        rectMode(RADIUS);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}