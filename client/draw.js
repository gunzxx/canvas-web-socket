const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

var nodes = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    clear();
}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

window.onresize = resize;
resize();


var currentForce = 1;

function force(e) {
    currentForce = e.webkitForce || 1;
}


function move(e) {
    if (e.buttons) {
        context.fillStyle = 'green';
        context.beginPath();
        context.arc(e.x, e.y, 5, 0, 2 * Math.PI,);
        context.lineWidth = 5;
        context.lineCap = 'round';
        context.fill();
        context.closePath();

        socket.emit('mousemove', {
            x: e.x,
            y: e.y,
        });
    }
}


function key(e) {
    if (e.key === 'Backspace') {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}

window.onkeydown = key;
window.onmousemove = move;
window.onmousedown = (e)=>{
    socket.emit('mousedown', {
        x:e.x, y:e.y
    });
}
window.onmouseup = (e)=>{
    socket.emit('mouseup', {
        x:e.x, y:e.y
    });
}