class Ground{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options)
		World.add(world, this.body);
	}

	display()
	{
		var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		rotate(this.body.angle)
		fill("brown");
		strokeWeight(0);
		rectMode(CENTER);
        rect(0,0,this.w, this.h);
		pop()
 }
}