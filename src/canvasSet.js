const draw = function(target, value) {
  switch (value){
    case 1: draw1(target); break;
    case 2: draw2(target); break;
    case 3: draw3(target); break;
    case 4: draw4(target); break;
    case 5: draw5(target); break;
    case 6: draw6(target); break; 
    default:
      console.log('not allow')
  }
}

function draw1(target){
  target.beginPath();
  target.arc(75, 75, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();
}

function draw2(target){
  target.beginPath();
  target.arc(35, 35, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();

  target.beginPath();
  target.arc(115, 115, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();
}

function draw3(target){
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

function draw4(target){
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

function draw5(target){
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

function draw6(target){
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