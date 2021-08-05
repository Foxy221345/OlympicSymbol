var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle="blue";
ctx.lineWidth=4;
ctx.arc(250,210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.arc(340,210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle="red";
ctx.lineWidth=4;
ctx.arc(430,210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle="yellow";
ctx.lineWidth=4;
ctx.arc(300,260, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle="green";
ctx.lineWidth=4;
ctx.arc(395,260, 40, 0, 2*Math.PI);
ctx.stroke();
