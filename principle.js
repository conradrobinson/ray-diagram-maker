class Principle extends drawable {//encompasses a bunch of things other than principle but I have no better name
    constructor(strokeWidth, Fl, Fr, F2l, F2r, Fheight, color, dashColor) //F's are 0-1 as a fraction of principle width
    {
        super()
        this.dashColor = dashColor
        this.color = color;
        this.strokeWidth = strokeWidth;
        this.Fl = Fl;
        this.Fr = Fr;
        this.F2r = F2r;
        this.F2l = F2l;
        this.Fheight = Fheight;
        this.principleWidth = dims[0]*0.9

        this.generate();
    }

    generate() {
        //this is such a mess I should properly comment my code not just vaguely talk to myself in it
        let leftBuffer = (dims[0]-this.principleWidth)/2
        this.lines.push([[leftBuffer + this.principleWidth*this.F2l, center[1]-(this.Fheight/2)], [leftBuffer+this.principleWidth*this.F2l, center[1]+(this.Fheight/2)], this.strokeWidth/3, this.dashColor]) //F2l
        this.lines.push([[leftBuffer + this.principleWidth*this.Fl, center[1]-(this.Fheight/2)], [leftBuffer+this.principleWidth*this.Fl, center[1]+(this.Fheight/2)], this.strokeWidth/3, this.dashColor]) //Fl
        this.lines.push([[leftBuffer + this.principleWidth*this.Fr, center[1]-(this.Fheight/2)], [leftBuffer+this.principleWidth*this.Fr, center[1]+(this.Fheight/2)], this.strokeWidth/3, this.dashColor]) //Fr
        Fr = [this.principleWidth*this.Fr, center[1]]
        this.lines.push([[leftBuffer + this.principleWidth*this.F2r, center[1]-(this.Fheight/2)], [leftBuffer+this.principleWidth*this.F2r, center[1]+(this.Fheight/2)], this.strokeWidth/3, this.dashColor]) //F2r
        this.lines.push([[center[0]-(this.principleWidth/2), center[1]], [center[0]+(this.principleWidth/2), center[1]], this.strokeWidth, this.color]) //principle line

        super.generate();
    }
}