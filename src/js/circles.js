window.onload() = () => {

    let canvas, ctx, gravity, ball, friction

    function init() {
        canvas = document.getElementsByClassName("App")
        ctx = canvas.getContext('2d')

        canvas.width = 100
        canvas.height = 100
        gravity = 0.25
        friction = 0.98

        ball = {

            bounce: 0.75, // energy lost on bounce (25%)
            radius: 30,
            x: canvas.width / 2,
            y: canvas.height / 2,
            velX: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1),
            velY: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1)
        }

        window.requestAnimationFrame(update)
    }

    function draw(){
        ctx.clearRect(0,0, canvas.width, canvas.height)

        ctx.beginPath()
        ctx.fillStyle = 'red'
        ctx.arc(
          ball.x, ball.y,
          ball.radius,
          0, Math.PI * 2
        )

        ctx.fill()
    }

    function update(){
        window.requestAnimationFrame(update)

        if (ball.y + ball.radius >= canvas.height) {
            // reverse direction and lose energy from bouncing
            ball.velY *= -ball.bounce
            // reset position
            ball.y = canvas.height - ball.radius
            // slow down the ball's X velocity with friction
            ball.velX *= friction
          }
          // top bound / ceiling
          if (ball.y - ball.radius <= 0) {
            ball.velY *= -ball.bounce
            ball.y = ball.radius
            ball.velX *= friction
          }
          
          // left bound
          if (ball.x - ball.radius <= 0) {
            ball.velX *= -ball.bounce
            ball.x = ball.radius
          }
          // right bound
          if (ball.x + ball.radius >= canvas.width) {
            ball.velX *= -ball.bounce
            ball.x = canvas.width - ball.radius
          }

        ball.velY += gravity

        // update ball position
        ball.x += ball.velX
        ball.y += ball.velY

        draw()
    }

    document.addEventListener('DOMContentLoaded', init)
}