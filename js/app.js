var time = null;
var board = document.querySelector('.board');
function start() {
    time = setInterval(function () {
        var zombie = document.createElement('div');
        zombie.classList.add('zombie');
        var position = Math.floor((Math.random() * 230) + 10).toString() + 'px';
        var speed = Math.floor((Math.random() * 15) + 5).toString() + 's';
        var scale = 'scale(' + (Math.random() + 1).toString() + ')';
        console.log(scale);
        zombie.style.animationDuration = '0.8s, ' + speed;
        zombie.style.bottom = position;
        zombie.style.transform = scale;
        zombie.addEventListener('animationend', function () {
            this.parentElement.removeChild(this);
        });
        board.appendChild(zombie);
    }, 2000);
}

start();