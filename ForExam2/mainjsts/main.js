"use strict";
window.onload = function () {
    var colorPick;
    var dotWidth;
    document.getElementById('colorPick').oninput = function () {
        colorPick = document.getElementById("colorPick").value;
        document.getElementById('paint').style.borderColor = colorPick;
    };
    document.getElementById('dotWidth').oninput = function () {
        dotWidth = document.getElementById("dotWidth").value;
    };
    const canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    const painting = document.getElementById('paint');
    let paint_style = getComputedStyle(painting);
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
//# sourceMappingURL=main.js.map