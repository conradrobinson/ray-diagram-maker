class Obj extends drawable {
    constructor(strokeWidth, height, x, y, hasDirection=true, color, shouldCastRays=false, isUpsideDown=false) //default for hasDirection is true 
    {
        super()
        this.isUpsideDown = isUpsideDown
        this.shouldCastRays = shouldCastRays
        this.color = color;
        this.strokeWidth = strokeWidth;
        this.height = height;
        this.x = x;
        
        this.y = y;
        this.hasDirection = hasDirection;
        
        this.generate();
    }

    generate() { //this code is getting horrible I now know what they mean about not using OOP
        //functional ftw
        //there was literally no need for me to make an "object" class it added nothing and makes everything more complicated
        let tx = this.x;
        if (this.shouldCastRays) {
            tx = leftBuffer + this.x
        }
        this.lines.push([[tx, this.y-(this.height/2)], [tx, this.y+(this.height/2)], this.strokeWidth, this.color]) //actual line of object
        if (this.hasDirection) {//do I need to draw the circle to show where the top is, or is it the lens or something
            if (this.isUpsideDown) {
                this.lines.push([[tx, this.y+((this.height/2)+this.strokeWidth*1.3)], [tx, this.y+((this.height/2)+this.strokeWidth*1.3)], this.strokeWidth, this.color]) //top of object represented by a circle
            } else {
                this.lines.push([[tx, this.y-((this.height/2)+this.strokeWidth*1.3)], [tx, this.y-((this.height/2)+this.strokeWidth*1.3)], this.strokeWidth, this.color]) //top of object represented by a circle
            }
        }

        super.generate()
        
        if (this.shouldCastRays) { //basically only the real object needs this
            
            if (isConvex) {
                let crossPoint = this.getRayCross([[tx, this.y-(this.height/2)], [center[0], center[1]]], [[center[0], this.y-(this.height/2)], [Fr[0] + leftBuffer, Fr[1]]]);
                let isVirtual = false; //temporary
                if (crossPoint[0] < tx) {
                    isVirtual = true;
                }
                let ray1 = new Ray([[tx, this.y-(this.height/2)], [center[0], center[1]], crossPoint], isVirtual);
                let ray2 = new Ray([[tx, this.y-(this.height/2)], [center[0], this.y-(this.height/2)], crossPoint], isVirtual);
                let resultingObject = new Obj(15, crossPoint[1]-center[1], crossPoint[0], center[1]+ (0.5*(crossPoint[1]-center[1])), true, "rgb(255, 51, 255)", false, true)

            }
        }
    }

    getRayCross(line1, line2) {
        //can't really be bothered to understand this, just based on some pseudocode to find the point at which two lines defined by 4 points cross

        //2022 update I have been forced to understand this as it breaks when I reach a certain point - when they're really nearly parallel
        //which happens some time after 480k off screen

        //update again - d becomes negative
        let a1 = line1[1][1] - line1[0][1] //change in y - line 1
        let b1 = line1[0][0] - line1[1][0] //change in x - line 1
        let c1 = a1*line1[0][0] + b1*line1[0][1]
        let a2 = line2[1][1] - line2[0][1] //change in y - line 2
        let b2 = line2[0][0] - line2[1][0] //change in x - line 2
        let c2 = a2*line2[0][0] + b2*line2[0][1]

        let d = a1*b2 - a2*b1; // (changeInY1 * changeInX2) - (changeInY2 * changeInX1)
        /*
        the first bracket should never be negative with my setup
        nor should the second
        so second bracket must get smaller than first at some point
        update update: I'm right - need new algorithm for this
        update update update: I'll live with it, if it goes wonky, it goes wonky
        */

        console.log(a1*b2)
        console.log()
        console.log(a2*b1)
        if (d == 0) {
            return [10, 10] //parallel lines (apparently, though I don't believe it - you'll need to prove it)
        } else {
            
            return [(b2*c1-b1*c2)/d, (a1*c2-a2*c1)/d]
        }
    }
}