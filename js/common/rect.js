export class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    
    equals(other) {
        return this.x === other.x && this.y === other.y
    }   
}

export class Rectangle  extends Point {
    constructor(x, y, width, height) {
        super(x, y)
        this.width = width
        this.height = height
    }

    get center() {
        return new Point(this.x + this.width / 2, this.y + this.height / 2)
    }
}