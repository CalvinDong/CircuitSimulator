var canvas = new fabric.Canvas('c', { selection: false });
//var canvas2 = new fabric.Canvas('d', { selection: false });
let width = window.innerWidth/2
let height = window.innerHeight/1.5
var grid = 10;
var gridSize = width/grid
var qubits = 2;
console.log(`width is ${width}`)
canvas.setWidth(width);
canvas.setHeight(height);
var originalX = 0;
var originalY = 0;
// create grid

/*for (var i = 0; i < (width / grid); i++) {
  canvas.add(new fabric.Line([ i * grid, 0, i * grid, width], { stroke: '#ccc', selectable: false })); // y-axis
  canvas.add(new fabric.Line([ 0, i * grid, width, i * grid], { stroke: '#ccc', selectable: false })); // x-axis
}*/

for (var i = 0; i < (gridSize); i++) {
  canvas.add(new fabric.Line([ gridSize * i , (width/5), gridSize * i, width/5 + (gridSize*qubits)], { stroke: '#ccc', selectable: false })); // y-axis
  //canvas.add(new fabric.Line([ 0, (width/grid) * i, width, (width/grid) * i], { stroke: '#ccc', selectable: false })); // x-axis
}

for (var i = 0; i <= qubits; i++){
  canvas.add(new fabric.Line([ 0, (width/5) + (gridSize * i), width,  (width/5) + (gridSize) * i], { stroke: '#ccc', selectable: false })); // x-axis
  console.log((width/5) + (gridSize) * i)
}

//canvas.add(new fabric.Line([100,0,0,10], { stroke: '#ccc', selectable: false }));
//canvas.add(new fabric.Line([0,width/5,height/3,width/5], { stroke: '#ccc', selectable: true }));
console.log(width/5 + (gridSize * qubits))

oingboing = {
	left: 0, 
  top: 0, 
  width: 50, 
  height: 50, 
  fill: '#faa', 
  originX: 'left', 
  originY: 'top',
  selectable: true,
  centeredRotation: true
  }



// add objects

//canvas2.add(new fabric.Triangle);

var rekt = new fabric.Rect(oingboing);

canvas.add(rekt);

canvas.add(new fabric.Circle({ 
  left: 300, 
  top: 300, 
  radius: 50, 
  fill: '#9f9', 
  originX: 'left', 
  originY: 'top',
  centeredRotation: true
}));

// snap to grid
rekt.on('mousedown', function(){
  originalX = rekt.left;
  originalY= rekt.top;
  console.log(`x is ${originalX} and y is ${originalY}`)
})

rekt.on('moved', function() {
  if (rekt.left < width && (rekt.top > (width/5)) && (rekt.top < width/5 + (gridSize * qubits))){
    rekt.set({
      left: Math.round(rekt.left / gridSize) * gridSize,
      top: Math.round(rekt.top / gridSize) * gridSize
    });
  }
  else{
    rekt.set({
      left: originalX,
      top: originalY
    });
  }
  console.log('selected a rectangle');
  rekt.set('fill', 'green');
  canvas.renderAll();
});