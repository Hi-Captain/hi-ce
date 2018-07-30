//주사위 생성 함수
const draw = function(canvas, target) {
  var cStyle = canvas.style

  var mix = setInterval(() => {
    cStyle.opacity = '0.6'
    var value = Math.floor(Math.random() * 6) + 1;

    switch (value){
      case 1: draw1(canvas, target); break;
      case 2: draw2(canvas, target); break;
      case 3: draw3(canvas, target); break;
      case 4: draw4(canvas, target); break;
      case 5: draw5(canvas, target); break;
      case 6: draw6(canvas, target); break; 
      default:
        console.log('error')
    }
  }, 100);

  setTimeout(function(){
    cStyle.opacity = '1'
    clearTimeout(mix)
  }, 1000)
}

//1번 주사위
function draw1(canvas, target){
  canvas.width = canvas.width

  target.beginPath();
  target.arc(75, 75, 15, 0, Math.PI * 2, true);
  target.fillStyle = "#000";
  target.fill();
}

//2번 주사위
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

//3번 주사위
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

//4번 주사위
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

//5번 주사위
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

//6번 주사위
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