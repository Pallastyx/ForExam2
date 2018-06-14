
window.onload = function (): void {

    var colorPick: any;
    var dotWidth: any;
    (document.getElementById('colorPick') as HTMLCanvasElement).oninput = function () {
        colorPick = (document.getElementById("colorPick") as HTMLInputElement).value;
        (document.getElementById('paint') as HTMLCanvasElement).style.borderColor = colorPick;
    };
    (document.getElementById('dotWidth') as HTMLCanvasElement).oninput = function () {
        dotWidth = (document.getElementById("dotWidth") as HTMLInputElement).value;
    };

    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    let ctx = canvas.getContext('2d')!;
    const painting = document.getElementById('paint') as HTMLCanvasElement;
    let paint_style = getComputedStyle(painting)!;

    canvas.width = parseInt(paint_style.getPropertyValue('width'));
    canvas.height = parseInt(paint_style.getPropertyValue('height'));

    let mouse = { x: 0, y: 0 };
    canvas.addEventListener('mousemove', function (event) {
        mouse.x = event.pageX - this.offsetLeft;
        mouse.y = event.pageY - this.offsetTop;
    }, false);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';



    canvas.addEventListener('mousedown', function () {
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseup', function () {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);

    var onPaint = function () {
        ctx.lineWidth = dotWidth;
        ctx.strokeStyle = colorPick;
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    };
};



