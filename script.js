let cId = "cnvs"
dims = [window.innerWidth, window.innerHeight] //global var - terrible practice but I'm lazy



center = [dims[0]/2, dims[1]/2] //global var - used for length
let c = document.getElementById(cId);
c.width = dims[0];
c.height = dims[1];
canvas = c.getContext("2d") //global var
//orange
canvas.strokeStyle = "rgb(255, 222, 46)"
canvas.lineCap = "round"
isConvex = true;
Fr = [0, 0]
leftBuffer = 0
function drawStuff(object, lens, principle) {
    canvas.clearRect(0, 0, c.width, c.height);
    let principleLine = new Principle(principle.strokeWeight, principle.Fl/100, principle.Fr/100, principle.F2l/100, principle.F2r/100, 50, "rgb(255, 255, 255)", "rgb(105, 105, 105)"); //grid and all extra stuff I don't want to give its own class
    let lensLine = new Obj(lens.strokeWeight, (dims[1]/3)*2, center[0],center[1], false, "rgb(135, 206, 235)", false, false)
    leftBuffer = (dims[0]-principleLine.principleWidth)/2

    let realObject = new Obj(object.strokeWeight, object.height, (object.x/100)*principleLine.principleWidth,center[1]-(object.height/2), true, "rgb(75, 0, 130)", true, false) //actual object we cast rays from
}



drawStuff(settings.object, settings.lens, settings.principle)