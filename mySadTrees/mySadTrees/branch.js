console.log("branch");

function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
    this.decided = 0;

    this.jitter = function() {
        this.end.x += random(-1, 1);
        this.end.y += random(-1, 1);
     }

    this.show = () => {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branchA = () => {
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI/15 + (random() * (PI/4)));
        dir.mult(0.75);
        let newEnd = p5.Vector.add(this.end, dir);
        let right = new Branch(this.end, newEnd);
        return right;
    }

    this.branchB = () => {
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-((PI/15)+(random() * (PI/4))));
        dir.mult(0.75);
        let newEnd = p5.Vector.add(this.end, dir);
        let left = new Branch(this.end, newEnd);
        return left;
    }
    
}