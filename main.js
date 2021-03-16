canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.arc(600, 400, 45, 0, 2 * Math.PI);
2
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.arc(550, 450, 45, 0, 2 * Math.PI);
2
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.arc(500, 400, 45, 0, 2 * Math.PI);
2
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 3;
ctx.arc(450, 450, 45, 0, 2 * Math.PI);
2
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.arc(400, 400, 45, 0, 2 * Math.PI);
2
ctx.stroke();
