class Drops {
    constructor(x,y) {
        var options = {
            restitution: 1,
        friction: 0.1
        }
        this.rain = Bodies.circle(x, y, 5, options);
    }
    update() {
        if (this.rain.position.y > height) {
            Matter.body.setPosition(this.rain, {x: random(1, 400), y: random(1, 400)});
        }
    }
}