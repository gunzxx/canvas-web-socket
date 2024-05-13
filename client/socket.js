const socket = io('ws://localhost:8000');

socket.on('mousemove', (data)=>{
    context.fillStyle = 'green';
    context.beginPath();
    context.arc(data.x, data.y, 5, 0, 2 * Math.PI,);
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.fill();
    context.closePath();
})