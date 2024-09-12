document.addEventListener("DOMContentLoaded", () => {

    let ball =  document.getElementById("ball");
    let table = document.getElementById("ping-pong-table");
    let paddle = document.getElementById("paddle");

    let ballX = 50;
    let ballY = 50;

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    dx = 2;
    dy = 2;

    setInterval (function exec() {

        ballX += dx;
        ballY += dy;

        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        if(ballX < paddle.offsetLeft + paddle.offsetWidth &&
            ballY > paddle.offsetTop &&
            ballY + ball.offsetHeight < paddle.offsetHeight + paddle.offsetTop
        ){
            dx *= -1;
        }

        if(ballX > table.offsetWidth-ball.offsetWidth || ballX <= 0) dx *=-1
        if(ballY > table.offsetHeight-ball.offsetHeight || ballY <= 0) dy *=-1
    } 
        ,10
    );

    let paddleY = 0;
    let dpY = 5;


    document.addEventListener("keydown", (event)=>{
        event.preventDefault();
        if(event.keyCode == 38 && paddleY > 0 ){
            
            paddleY += (-1)*dpY
        }
        else if(event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight - 10){
            paddleY += dpY
        }
        paddle.style.top = `${paddleY}px`;
    })

} 
);

