class drawable {
    lines = [] //3d arr [line1: [point1: [x, y], point2: [x, y]], line2: [point1: [x, y], point2: [x, y]]]...]
    strokeWidth = 8
    generate() {
        this.draw()
    }
    draw() {
        canvas.lineWidth = this.strokeWidth
        for (let i = 0; i < this.lines.length; i++) {
            canvas.lineWidth = this.lines[i][2]
            canvas.strokeStyle = this.lines[i][3]
            canvas.beginPath();
            
            canvas.moveTo(this.lines[i][0][0], this.lines[i][0][1]); //first point in the line
            canvas.lineTo(this.lines[i][1][0], this.lines[i][1][1]); //second point in the line
            canvas.stroke(); 
        }
    }
}