const draw = function(canvas, target) {
  var value = Math.floor(Math.random() * 6) + 1;

  switch (value){
    case 1: draw1(canvas, target); break;
    case 2: draw2(canvas, target); break;
    case 3: draw3(canvas, target); break;
    case 4: draw4(canvas, target); break;
    case 5: draw5(canvas, target); break;
    case 6: draw6(canvas, target); break; 
    default:
      console.log('not allow')
  }
}

function draw1(canvas, target){
  canvas.width = canvas.width

  target.beginPath();
  target.arc(75, 75, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();
}

function draw2(canvas, target){
  canvas.width = canvas.width

  target.beginPath();
  target.arc(35, 35, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(115, 115, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();
}

function draw3(canvas, target){
  canvas.width = canvas.width

  target.beginPath();
  target.arc(35, 35, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(75, 75, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(115, 115, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();
}

function draw4(canvas, target){
  canvas.width = canvas.width

  target.beginPath();
  target.arc(35, 35, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(115, 115, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(115, 35, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(35, 115, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();
}

function draw5(canvas, target){
  canvas.width = canvas.width

  target.beginPath();
  target.arc(35, 35, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(115, 115, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(115, 35, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(35, 115, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(75, 75, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();
}

function draw6(canvas, target){
  canvas.width = canvas.width

  target.beginPath();
  target.arc(35, 35, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(115, 115, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(115, 35, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(35, 115, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(35, 75, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(115, 75, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();
}

export default draw;