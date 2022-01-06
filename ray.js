class Ray extends drawable {
    constructor(points, isVirtual) {
        super()
        this.isVirtual = isVirtual;
        this.points = points
        this.generate()
    }
    generate() {
        this.generateDashedLines(!this.isVirtual);
        super.generate();
    }

    generateDashedLines(real) {
        for (let i = 0; i < this.points.length-1; i++){
            let dist = Math.sqrt((this.points[i+1][0] - this.points[i][0])**2 + (this.points[i+1][1] - this.points[i][1])**2) //pythagoras - so they were right... I do actually use it...?
            let dashLength = 30; //in pixels but it isn't axis aligned so it's arbitrary
            let numberOfDashes = (dist - (dist % dashLength))/dashLength 
            dashLength += (dist%dashLength)/numberOfDashes 
            let dX = (dashLength/dist)*(this.points[i+1][0] - this.points[i][0]);
            let dY = (dashLength/dist)*(this.points[i+1][1] - this.points[i][1]);

            for (let j = 0; j < numberOfDashes; j+=2) {
                //get change in x and change in y by reversing the dashLength
                let firstPoint = [this.points[i][0]+(dX*j), this.points[i][1]+ (dY*j)]
                let secondPoint = [this.points[i][0]+(dX*(j+1)), this.points[i][1]+(dY*(j+1))]
                let color = "rgb(255, 222, 46)"
                if (j % 4 == 0 && !real) {
                    color = "rgb(255, 255, 255)"
                }
                this.lines.push([firstPoint, secondPoint, 5, color])

            }
        }
    }
}